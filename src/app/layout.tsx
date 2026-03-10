import type { Metadata } from 'next';
import { Space_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CREATEDBYMASE | byMase + Greenhaus',
  description: 'Two worlds, one vision. byMase — clothes that speak. Greenhaus — accessories and custom home decoration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
