import React from 'react';
import AuthHandler from '@/components/AuthHandler';
import HomeMain from '@/components/Home/HomeMain';
import HeaderNav from '@/components/Header/HeaderNav';

export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <AuthHandler />
    </>
  );
}
