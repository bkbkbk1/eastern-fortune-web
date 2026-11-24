import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pillarsJson = searchParams.get('pillars');
    const fortuneJson = searchParams.get('fortune');

    if (!pillarsJson || !fortuneJson) {
      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}
          >
            오류가 발생했습니다
          </div>
        ),
        { width: 1200, height: 630 }
      );
    }

    const pillars = JSON.parse(decodeURIComponent(pillarsJson));
    const fortune = JSON.parse(decodeURIComponent(fortuneJson));

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '60px',
            color: 'white',
          }}
        >
          {/* 제목 */}
          <div style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 40 }}>
            🔮 2027년 정미년 운세
          </div>

          {/* 사주팔자 */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 20,
              padding: 30,
              marginBottom: 30,
              gap: 30,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 20, opacity: 0.9 }}>년주</div>
              <div style={{ fontSize: 32, fontWeight: 'bold' }}>{pillars.year}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 20, opacity: 0.9 }}>월주</div>
              <div style={{ fontSize: 32, fontWeight: 'bold' }}>{pillars.month}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 20, opacity: 0.9 }}>일주</div>
              <div style={{ fontSize: 32, fontWeight: 'bold' }}>{pillars.day}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: 20, opacity: 0.9 }}>시주</div>
              <div style={{ fontSize: 32, fontWeight: 'bold' }}>{pillars.hour}</div>
            </div>
          </div>

          {/* 운세 요약 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 20,
              padding: 25,
              gap: 15,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 'bold' }}>💫 {fortune.overall}</div>
            <div style={{ fontSize: 18 }}>💰 재물운: {fortune.wealth}</div>
            <div style={{ fontSize: 18 }}>🏆 직업운: {fortune.career}</div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (error) {
    console.error('OG Image error:', error);
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            background: '#ef4444',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 40,
          }}
        >
          이미지 생성 실패
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }
}
