import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@orrery/core'],
  async redirects() {
    return [
      // 2026년 병오년 해설은 2027년 정미년 해설로 통합했습니다.
      // 검색·외부 링크로 들어오는 예전 주소가 404가 되지 않도록 영구 이동시킵니다.
      {
        source: '/guide/byeongo-2026',
        destination: '/guide/jeongmi-2027',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
