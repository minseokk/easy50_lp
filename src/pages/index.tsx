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
          <h1 className="break-keep text-6xl">
            안전 담당자를 위한 최고의 가이드 툴
          </h1>
          <p className="break-keep text-3xl text-gray-600">
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
        <div>
          <p className="break-keep">
            안전 담당자라면 피할 수 없는 귀찮은 서류 작업과 문서 보관, 편안50을
            통해 쉽고 편하게 일하세요.
          </p>
        </div>
        <div className="mb-6 flex w-full justify-center">
          <Link href={"/application"}>
            <button
              type="button"
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-base font-medium text-white hover:bg-yellow-500"
            >
              무료 체험하러 가기
            </button>
          </Link>
        </div>
        <div className="mb-12 w-full">
          <h2 className="text-3xl">기능 소개</h2>
          <table className="m-auto w-full table-auto border-collapse">
            <tbody>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  안전보건관리체계 업무
                </td>
                <td className="border">
                  <ul>
                    <li>안전보건경영 방침 수립</li>
                    <li>안전관리 계획 수립과 수행에 대한 기록</li>
                    <li>현장 안전메뉴얼 수립 및 수행 기록</li>
                    <li>비상대응대책 매뉴얼</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  위험성평가
                </td>
                <td className="border">
                  <ul>
                    <li>위험성 평가 수행 및 기록</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  종사자 의견청취
                </td>
                <td className="border">
                  <ul>
                    <li>안전에 대한 종사자 설문 설계와 취합, 서류화, 보관</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  안전 교육
                </td>
                <td className="border">
                  <ul>
                    <li>안전교육 계획, 수행 및 캠페인 추진에 대한 기록</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  산업재해 대응
                </td>
                <td className="border">
                  <ul>
                    <li>내부 통계 기록을 활용한 원인조사</li>
                    <li>재발방지대책 수립</li>
                    <li>내부 재해 상황</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  산업재해 통계
                </td>
                <td className="border">
                  <ul>
                    <li>KOSHA 산업재해 통계 자료 확인 링크</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  법령안내
                </td>
                <td className="border">
                  <ul>
                    <li>산업안전보건법</li>
                    <li>중대재해처벌법</li>
                    <li>법률 준수 사항에 대한 기록</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  안전회의 및 TBM
                </td>
                <td className="border">
                  <ul>
                    <li>회의 안건 공유</li>
                    <li>회의록 작성</li>
                    <li>회의 내용 열람</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-white bg-yellow-400 text-center text-xl text-white">
                  데이터 저장소
                </td>
                <td className="border">
                  <ul>
                    <li>모든 데이터 열람</li>
                    <li>간편 서류화 기능</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-12 w-full">
          <h2 className="text-3xl">데이터 보관 안내</h2>
          <p className="break-keep">
            모든 안전보건 활동 데이터는 3년 이상 편안50 서버에 안전하게
            보관합니다. 또한, 산업재해 또는 중대재해 발생 시 간편하게
            안전보건체계 구축 증빙자료를 제출할 수 있습니다.
          </p>
        </div>
        <div className="mb-12 w-full">
          <h2 className="text-3xl">요금제</h2>
          <p>월 10만 원~30만 원(변동가능) 데이터 보관료: 3년 초과 시 별도</p>
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
