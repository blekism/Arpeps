import Header from "@/components/header";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
