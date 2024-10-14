import React from 'react';
import { Search, X } from 'lucide-react';
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
      <SearchBar placeholder="Search..." className="w-[300px]" error="Error message here" />
      <button className="text-error-30 rounded-10 mt-1 bg-error-5  focus:bg-error-40">
        button
        <div className="p-2">
          <Search className="h-5 w-5" />
          <X className="h-5 w-5 text-neutral-0" />
          <div className="rounded-4"></div>
        </div>
      </button>
    </>
  );
}
