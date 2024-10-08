import HomeMain from '../components/Home/HomeMain';
import HeaderNav from '../components/Header/HeaderNav';
import AuthHandler from '../components/AuthHandler';

export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <AuthHandler />
    </>
  );
}
