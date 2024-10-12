'use client';

import React from 'react';
import AuthHandler from '@/components/AuthHandler';
import HomeMain from '@/components/Home/HomeMain';
import HeaderNav from '@/components/Header/HeaderNav';
import Dropbox from '@/lib/common/Dropbox';
export default function HomePage() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <Dropbox
        options={[
          { value: 'option1', label: '옵션 1' },
          { value: 'option2', label: '옵션 2' },
          { value: 'option3', label: '옵션 3' },
        ]}
        placeholder="선택하세요"
        className="w-[18rem]"
      />
      <AuthHandler />
    </>
  );
}
