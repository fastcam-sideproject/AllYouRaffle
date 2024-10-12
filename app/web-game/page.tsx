import dynamic from 'next/dynamic';

import React from 'react';

const EmojiGame = dynamic(() => import('@/components/Emoji/EmojiGame'), { ssr: false });
const BreakoutGame = dynamic(() => import('@/components/BreakoutGame'), { ssr: false });

export default function page() {
  return (
    <>
      <EmojiGame />
      <BreakoutGame />
    </>
  );
}
