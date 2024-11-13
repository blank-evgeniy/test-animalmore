import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Header } from '@/widgets/header';
import './globals.css';
import { Navbar } from '@/widgets/navbar';
import { Footer } from '@/widgets/footer';

const nunito = Nunito({ weight: ['400', '500', '600'], subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Animalmore',
  description: 'Все о ваших питомцах',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="mx-auto max-w-[1280px]">
          <Header />
          <Navbar />
          <div className="min-h-[calc(100vh-280px)]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
