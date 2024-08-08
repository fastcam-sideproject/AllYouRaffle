'use client';

import { useRouter } from 'next/navigation';

export default function GoogleLoginButton() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('http://allyouraffle.co.kr/oauth2/authorization/google');
  };

  return (
    <button
      onClick={handleLogin}
      className="flex  items-center text-lg  border py-2 px-4 gap-2 bg-white text-black rounded hover:bg-gray-100 transition-colors"
    >
      <img src="/image/google_logo.svg" alt="구글 로그인 아이콘" />
      <span>Sign in with Google</span>
    </button>
  );
}
