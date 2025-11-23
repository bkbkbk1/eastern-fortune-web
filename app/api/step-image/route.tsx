import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const step = searchParams.get('step') || '1';

  const stepTexts: Record<string, { title: string; subtitle: string }> = {
    '1': { title: '생년월일 입력', subtitle: '8자리로 입력해주세요 (예: 19901225)' },
    '2': { title: '출생시간 선택', subtitle: '대략적인 시간대를 선택하세요' },
    '3': { title: '성별 선택', subtitle: '대운 계산을 위해 필요합니다' },
    'error': { title: '오류 발생', subtitle: '다시 시도해주세요' }
  };

  const text = stepTexts[step] || stepTexts['1'];

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
        <div style={{ fontSize: 70, fontWeight: 'bold', marginBottom: 20 }}>
          {text.title}
        </div>
        <div style={{ fontSize: 32, opacity: 0.9, textAlign: 'center' }}>
          {text.subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
