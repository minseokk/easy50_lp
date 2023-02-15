import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";

const Application: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start space-y-4 p-4">
        <div className="w-full">
          <h1 className="text-3xl">서비스 화면</h1>
          <div className="relative aspect-video w-full">
            <Image
              src={"/service.png"}
              alt={"Service Screen"}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <h1 className="text-3xl">기능 안내</h1>
        <div className="flex w-full flex-wrap justify-center space-x-4 space-y-4">
          <Link href={"/application/features/test"}>
            <button
              type="button"
              className="flex h-24 w-48 items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전관리체계 업무</p>
            </button>
          </Link>
          <Link href={"/"}>
            <button
              type="button"
              className="flex h-24 w-48 items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전관리체계 업무</p>
            </button>
          </Link>
          <Link href={"/"}>
            <button
              type="button"
              className="flex h-24 w-48 items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전관리체계 업무</p>
            </button>
          </Link>
          <Link href={"/"}>
            <button
              type="button"
              className="flex h-24 w-48 items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전관리체계 업무</p>
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Application;
