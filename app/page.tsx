import dynamic from 'next/dynamic';
import AuthHandler from '@/components/AuthHandler';
import HomeMain from '@/components/Home/HomeMain';
import HeaderNav from '@/components/Header/HeaderNav';

const EmojiGame = dynamic(() => import('@/components/Emoji/EmojiGame'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <AuthHandler />
      <EmojiGame />
    </>
  );
}
