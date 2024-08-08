import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import HeaderNav from '../components/Header/HeaderNav';
import Footer from '../components/Footer/Footer';
import ReactQueryProviders from '../hooks/useReactQuery';

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'All Your Affle',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <ReactQueryProviders>
          <HeaderNav />
          {children}
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
