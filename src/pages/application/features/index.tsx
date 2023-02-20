import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next/types";

const TestFeature: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>무료 체험 | {router.query.feature} | 편안50</title>
      </Head>
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start space-y-4 p-4">
        <div className="w-full">
          <p>
            안녕하세요, 현재 서비스 준비 중 입니다. 저희 서비스에 관심을
            가져주셔서 진심으로 감사합니다. 이메일 주소를 남겨주시면 서비스 무료
            이용 쿠폰을 보내드리겠습니다. 감사합니다.
          </p>
          <form className="w-full p-4">
            <div className="mb-6">
              <label className="mb-2 block text-lg">이메일</label>
              <input
                type="email"
                name="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-green-700"
                placeholder="example@savety.kr"
                required
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-lg">
                고객님의 자유로운 의견 부탁드립니다.
              </label>
              <input
                type="text"
                name="other"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-green-700"
                placeholder="(선택)"
              />
            </div>
            <button
              type="submit"
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-base font-medium text-white hover:bg-yellow-500"
            >
              제출
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default TestFeature;
