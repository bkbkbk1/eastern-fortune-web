import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 30 }}>
          🔮
        </div>
        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>
          2027년 정미년 운세
        </div>
        <div style={{ fontSize: 32, opacity: 0.9 }}>
          정통 사주명리로 보는 당신의 2027년
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
