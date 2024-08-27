import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 my-8">
      <Image
        width={500}
        height={500}
        src="/image/background/error_bg.png"
        alt="errorpage"
        className="w-auto h-auto"
      />
      <h2 className="bg-primary lg:w-3/12 text-center px-4 py-2 text-2xl font-semibold text-white border-solid border-2 border-blue-500 rounded-xl w-11/12">
        페이지를 찾을 수 없습니다
      </h2>
      <p className=" lg:w-3/12 text-center text-lg p-4 w-11/12">주소 를 확인해주세요 !</p>
      <Link
        href="/"
        className="bg-primary hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-md"
      >
        홈 으로
      </Link>
    </section>
  );
}
