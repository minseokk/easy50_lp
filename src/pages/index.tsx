import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>편안50</title>
        <meta
          name="description"
          content="중소기업 전문 안전보건관리 업무체계"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start p-4">
        <div>
          <h1 className="text-6xl">안전 담당자를 위한 최고의 가이드 툴</h1>
          <p className="text-3xl text-gray-600">
            완벽한 안전보건관리 업무체계를 통해 경력 없이도 누구나 쉽고 편하게
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="relative aspect-square w-full max-w-xl">
            <Image
              src={"/demo.png"}
              alt={"Servie Demo"}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link href={"/application"}>
            <button
              type="button"
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-base font-medium text-white hover:bg-yellow-500"
            >
              무료 체험하러 가기
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
