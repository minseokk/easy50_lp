import Head from "next/head";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Image from "next/image";

const TestFeature = () => {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const subimit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!sending) {
      event.preventDefault();
      setSending(true);
      sendEmail(event);
    }
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          event.currentTarget,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          async (result) => {
            console.log(result);
            setSending(false);
            await router.push(`/application/submitted`);
          },
          (error) => {
            setSending(false);
          }
        );
    }
  };

  return (
    <>
      <Head>
        <title>무료 체험 | {router.query.feature} | 편안50</title>
      </Head>
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-start space-y-4 p-4">
        <div className="w-full">
          <h2 className="text-3xl">내용</h2>
          {router.query.feature === "안전관리체계_업무" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>안전보건경영 방침 수립</li>
                  <li>안전관리 계획 수립과 수행에 대한 기록</li>
                  <li>현장 안전메뉴얼 수립 및 수행 기록</li>
                  <li>비상대응대책 매뉴얼</li>
                </ul>
              </div>
              <div className="mb-6 w-full">
                <h2 className="text-3xl">참고 사진</h2>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/safetyjob_img1.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/safetyjob_img2.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/safetyjob_img3.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/safetyjob_img4.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {router.query.feature === "위험성평가" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>위험성 평가 수행 및 기록</li>
                </ul>
              </div>
              <div className="mb-6 w-full">
                <h2 className="text-3xl">참고 사진</h2>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/riskassess_img1.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/riskassess_img2.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-video w-full max-w-xl">
                    <Image
                      src={"/riskassess_img3.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {router.query.feature === "종사자_의견청취" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>안전에 대한 종사자 설문 설계와 취합, 서류화, 보관</li>
                </ul>
              </div>
            </div>
          )}
          {router.query.feature === "교육" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>안전교육 계획, 수행 및 캠페인 추진에 대한 기록</li>
                </ul>
              </div>
              <div className="mb-6 w-full">
                <h2 className="text-3xl">참고 사진</h2>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/education_img1.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/education_img2.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {router.query.feature === "산업재해_대응" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>내부 통계 기록을 활용한 원인조사</li>
                  <li>재발방지대책 수립</li>
                  <li>내부 재해 상황</li>
                </ul>
              </div>
              <div className="mb-6 w-full">
                <h2 className="text-3xl">참고 사진</h2>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/disastresponse_img1.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/disastresponse_img2.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {router.query.feature === "산업재해_통계" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>
                    KOSHA 산업재해 통계 자료 확인{" "}
                    <a
                      className="text-blue-600 underline"
                      href="https://www.kosha.or.kr/kosha/data/industrialDisasterStatistics.do#/a"
                      target="_blank"
                      rel="noreferrer"
                    >
                      링크
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {router.query.feature === "법령_안내" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>산업안전보건법</li>
                  <li>중대재해처벌법</li>
                  <li>법률 준수 사항에 대한 기록</li>
                </ul>
              </div>
            </div>
          )}
          {router.query.feature === "안전_미팅" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>회의 안건 공유</li>
                  <li>회의록 작성</li>
                  <li>회의 내용 열람</li>
                </ul>
              </div>
              <div className="mb-6 w-full">
                <h2 className="text-3xl">참고 사진</h2>
                <div className="flex w-full items-center justify-center">
                  <div className="relative aspect-square w-full max-w-xl">
                    <Image
                      src={"/meeting_img1.png"}
                      alt={"Servie Demo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {router.query.feature === "데이터_저장소" && (
            <div className="w-full">
              <div className="mb-6 w-full">
                <ul>
                  <li>모든 데이터 열람</li>
                  <li>간편 서류화 기능</li>
                </ul>
              </div>
            </div>
          )}
          <p>
            안녕하세요, 현재 서비스 준비 중 입니다. 저희 서비스에 관심을
            가져주셔서 진심으로 감사합니다. 이메일 주소를 남겨주시면 서비스 무료
            이용 쿠폰을 보내드리겠습니다. 감사합니다.
          </p>
          <form ref={form} className="w-full p-4" onSubmit={subimit}>
            <input
              type="text"
              name="feature"
              value={router.query.feature}
              readOnly
              className="hidden"
            />
            <div className="mb-6">
              <label className="mb-2 block text-lg">이메일</label>
              <input
                type="email"
                name="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-yellow-500"
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:outline-yellow-500"
                placeholder="(선택)"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className={
                sending
                  ? "mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-500 py-3 px-8 text-base font-medium text-white "
                  : "mt-6 flex items-center justify-center rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-base font-medium text-white hover:bg-yellow-500"
              }
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
