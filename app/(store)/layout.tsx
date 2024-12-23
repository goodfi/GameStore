import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 mx-auto w-full max-w-[1520px] ">
        {children}
      </section>
    </main>
  );
}
