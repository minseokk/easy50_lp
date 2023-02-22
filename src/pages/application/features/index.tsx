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
          <h2>내용</h2>
          {router.query.feature === "안전관리체계_업무" && (
            <div className="w-full">
              <ul>
                <li>안전보건경영 방침 수립</li>
                <li>안전관리 계획 수립과 수행에 대한 기록</li>
                <li>현장 안전메뉴얼 수립 및 수행 기록</li>
                <li>비상대응대책 매뉴얼</li>
              </ul>
              <div>
                <h2>참고 사진</h2>
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
              <ul>
                <li>위험성 평가 수행 및 기록</li>
              </ul>
              <div>
                <h2>참고 사진</h2>
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
