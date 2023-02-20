import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Submitted: NextPage = () => {
  return (
    <>
      <Head>
        <title>무료 체험 신청 완료 | 편안50</title>
      </Head>
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start p-4">
        <div>
          <p>신청해주셔서 감사합니다.</p>
          <Link href={"/"}>
            <button
              type="button"
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-base font-medium text-white hover:bg-yellow-500"
            >
              홈 화면으로 돌아가기
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Submitted;
