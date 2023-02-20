import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type NextPage } from "next";

const Application: NextPage = () => {
  return (
    <>
      <Head>
        <title>무료 체험 | 편안50</title>
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
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          <Link href={"/application/features?feature=안전관리체계_업무"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전관리체계 업무</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=위험성평가"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">위험성평가</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=종사자_의견청취"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">종사자 의견청취</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=교육"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">교육</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=산업재해_대응"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">산업재해 대응</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=산업재해_통계"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">산업재해 통계</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=법령_안내"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">법령 안내</p>
            </button>
          </Link>
          <Link href={"/application/features?feature=안전_미팅"}>
            <button
              type="button"
              className="flex h-24 w-full items-center justify-center rounded-md bg-gray-200 shadow-md"
            >
              <p className="">안전 미팅</p>
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Application;
