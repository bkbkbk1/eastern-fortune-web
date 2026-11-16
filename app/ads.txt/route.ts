/**
 * ads.txt for Google AdSense.
 *
 * NEXT_PUBLIC_ADSENSE_ID 에 게시자 ID(pub-xxxxxxxxxxxxxxxx)를 설정하면
 * https://saju2026.com/ads.txt 가 실제 내용으로 응답합니다.
 * 설정하지 않으면 404 를 반환하므로, 승인 전에 가짜 ID가 노출되지 않습니다.
 */
// 환경변수를 요청 시점에 읽어, 값을 추가한 뒤 재배포 없이도 바로 반영되게 한다.
export const dynamic = "force-dynamic";

export function GET() {
  const raw = (process.env.NEXT_PUBLIC_ADSENSE_ID ?? "").trim();
  const pubId = raw.replace(/^ca-/, "");

  if (!/^pub-\d{16}$/.test(pubId)) {
    return new Response("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
