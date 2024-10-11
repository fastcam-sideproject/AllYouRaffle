'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import NumberGuessingGame from './NumberGuessingGame';
import MemoryCardGame from './MemoryCardGame';
import NumberBaseballGame from './NumberBaseballGame';
import MovingGame from './MovingGame';
import ClickSpeedTest from './ClickSpeedTestGame';
const BreakoutGame = dynamic(() => import('./BreakoutGame'), { ssr: false });

export default function MobileGameStart() {
  const [activeGame, setActiveGame] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const games = [
      <NumberGuessingGame onClose={() => setActiveGame(null)} key="numberGuessing" />,
      <MemoryCardGame onClose={() => setActiveGame(null)} key="memoryCard" />,
      <NumberBaseballGame onClose={() => setActiveGame(null)} key="numberBaseball" />,
      <MovingGame onClose={() => setActiveGame(null)} key="catchGame" />,
      <ClickSpeedTest onClose={() => setActiveGame(null)} key="clickSpeedTest" />,
      <BreakoutGame onClose={() => setActiveGame(null)} key="breakoutGame" />,
    ];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    setActiveGame(randomGame);
  }, []);

  return (
    <section className="min-h-[30rem] flex flex-col items-center justify-center">
      {activeGame}
    </section>
  );
}
