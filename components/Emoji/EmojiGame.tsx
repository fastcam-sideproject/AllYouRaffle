'use client';

import React, { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';
import Preloader from '@/components/Emoji/Preloader';
import MainMenu from '@/components/Emoji/MainMenu';
import MainGame from '@/components/Emoji/MainGame';
import Boot from '@/components/Emoji/Boot';

export default function EmojiGame() {
  const gameRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: '#008eb0',
        parent: gameRef.current,
        scene: [Boot, Preloader, MainMenu, MainGame],
      };

      const game = new Phaser.Game(config);

      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-3xl text-center mb-4">Emoji Match Game</h1>
      <div ref={gameRef} className="w-full h-full md:w-[800px] md:h-[600px]" />
    </div>
  );
}
