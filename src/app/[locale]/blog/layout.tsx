export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-4">
      <div className="w-75 bg-[yellow]">
        <p>Hello</p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
