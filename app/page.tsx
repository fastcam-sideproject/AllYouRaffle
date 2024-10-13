import React from 'react';
import AuthHandler from '@/components/AuthHandler';
import HomeMain from '@/components/Home/HomeMain';
import HeaderNav from '@/components/Header/HeaderNav';
import { SearchBar } from '@/lib/common/SearchBar';

export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <AuthHandler />
    </>
  );
}
