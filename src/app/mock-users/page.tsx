import { revalidatePath } from 'next/cache';
import { auth, currentUser } from '@clerk/nextjs/server';

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const authObj = await auth();
  const user = await currentUser();

  console.log('Auth object:', authObj);
  console.log('Current user:', user);

  const response = await fetch(
    'https://680c6c202ea307e081d3f06d.mockapi.io/users'
  );
  const users = await response.json();

  async function addUser(formData: FormData) {
    'use server';
    const name = formData.get('name');
    const res = await fetch(
      'https://680c6c202ea307e081d3f06d.mockapi.io/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      }
    );

    const newUser = await res.json();
    revalidatePath('/mock-users');
    console.log('New user added:', newUser);
  }

  return (
    <>
      <div className="py-10">
        <form action={addUser} className="mb-4">
          <input type="text" name="name" required className="border p-2 mr-2" />
          <button type="submit" className="text-blue-500">
            Add user
          </button>
        </form>
      </div>
      <ul className="space-y-4 p-4">
        {users.map((user: MockUser) => (
          <li
            key={user.id}
            className="p4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
