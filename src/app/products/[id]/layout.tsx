export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
      <div>
        <h2>Featured products section</h2>
      </div>
    </div>
  );
}
