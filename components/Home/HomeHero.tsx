import { useState } from 'react';
import Button from '../../lib/common/Button';
import useAuthStore from '../../lib/store/useAuthStore';
import NumberGuessingGame from '../NumberGuessingGame';
import MemoryCardGame from '../MemoryCardGame';
import NumberBaseballGame from '../NumberBaseballGame';
import MovingGame from '../MovingGame';
import ClickSpeedTest from '../ClickSpeedTestGame';

export default function HomeHero() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const userToken = useAuthStore((state) => state.userToken);

  /**
   * @description 랜덤 게임 시작 버튼 클릭 시 실행되는 함수
   */
  const handleRandomGameStart = () => {
    if (!userToken) {
      alert('로그인해주세요.');
      return;
    }

    const games = ['numberGuessing', 'memoryCard', 'numberBaseball', 'catchGame', 'clickSpeedTest'];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    setActiveGame(randomGame);
  };

  return (
    <section className="min-h-[30rem] flex flex-col items-center justify-center bg-blue-50">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-3xl font-bold mb-4 text-shadow-white-shadow">
          All You Raffle 에 오신것을 환영합니다
        </h2>
        <p className="md:text-xl mb-6 text-shadow-white-shadow">행운을 받아가세요!</p>
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">랜덤 게임 🎲</h3>
            <p className="mb-4">행운을 시험해보세요! 랜덤으로 게임이 선택됩니다.</p>
            <p className="text-primary-30">
              앱 심사중으로 쿠폰이 발급되질 않습니다! 심사후에 이용해주세요!
            </p>
            <Button
              label="랜덤 게임 시작"
              width="full"
              fontSize="base"
              className="text-white font-bold bg-primary-30 hover:bg-blue-500"
              type="button"
              onClick={handleRandomGameStart}
            />
          </div>
        </div>
      </div>

      {userToken && activeGame === 'numberGuessing' && (
        <NumberGuessingGame onClose={() => setActiveGame(null)} />
      )}
      {userToken && activeGame === 'memoryCard' && (
        <MemoryCardGame onClose={() => setActiveGame(null)} />
      )}
      {userToken && activeGame === 'numberBaseball' && (
        <NumberBaseballGame onClose={() => setActiveGame(null)} />
      )}
      {userToken && activeGame === 'catchGame' && (
        <MovingGame onClose={() => setActiveGame(null)} />
      )}
      {userToken && activeGame === 'clickSpeedTest' && (
        <ClickSpeedTest onClose={() => setActiveGame(null)} />
      )}
    </section>
  );
}
