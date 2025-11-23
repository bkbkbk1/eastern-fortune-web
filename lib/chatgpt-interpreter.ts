import OpenAI from 'openai';
import { SajuPillars } from './saju-calculator';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
});

export interface FortuneResult {
  overall: string;
  wealth: string;
  career: string;
  health: string;
  advice: string;
}

export async function interpretSaju(
  pillars: SajuPillars,
  gender: '남성' | '여성'
): Promise<FortuneResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `당신은 30년 경력의 한국 사주명리학 전문가입니다. 정통 사주 이론을 바탕으로 2026년 병오년(丙午年, 火의 해) 운세를 해석합니다.`
        },
        {
          role: 'user',
          content: `다음 사주팔자를 2026년 병오년 기준으로 해석해주세요:

**사주팔자:**
- 년주(年柱): ${pillars.year}
- 월주(月柱): ${pillars.month}
- 일주(日柱): ${pillars.day}
- 시주(時柱): ${pillars.hour}
- 일간(日干): ${pillars.dayMaster}
- 성별: ${gender}

**출력 형식 (JSON):**
{
  "overall": "2026년 전체 운세 요약 (100자 이내)",
  "wealth": "재물운 (80자 이내, 구체적인 조언 포함)",
  "career": "직업운/사업운 (80자 이내, 실천 가능한 조언)",
  "health": "건강운 (80자 이내)",
  "advice": "2026년 핵심 조언 (100자 이내, 실천 가능한 액션)"
}

**요구사항:**
1. 2026년 병오년(丙午年)이 사주의 오행과 어떻게 상호작용하는지 분석
2. 추상적 표현 금지, 구체적이고 실용적인 조언
3. 긍정적이되 주의사항도 명확히 전달
4. 투자/재테크/커리어 결정에 참고할 수 있는 방향성 제시`
        }
      ],
      temperature: 0.7,
      max_tokens: 800,
      response_format: { type: 'json_object' }
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error('ChatGPT 응답이 비어있습니다.');
    }

    return JSON.parse(result) as FortuneResult;
  } catch (error) {
    console.error('Error interpreting Saju:', error);
    throw new Error('운세 해석 중 오류가 발생했습니다.');
  }
}
