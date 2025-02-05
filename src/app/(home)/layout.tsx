import Footer from "@/components/home/footer";
import Header from "@/components/shared/header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full shadow-md flex-col overflow-x-hidden bg-white font-[family-name:var(--font-geist-sans)] mx-auto xl:max-w-[1350px]">
      {/* <Header /> */}
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
        <div className="mx-auto grid w-full items-start gap-6">{children}</div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}
