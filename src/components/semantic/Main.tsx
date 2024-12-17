export const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="py-20">
      <div className="main_inner myContainer">{children}</div>
    </main>
  );
};
