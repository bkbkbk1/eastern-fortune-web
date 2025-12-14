import OpenAI from 'openai';
import { SajuPillars } from './saju-calculator';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
});

export interface FortuneResult {
  // 기본 정보
  overall: string;

  // 주요 운세
  employment: string;
  workplace: string;
  jobChange: string;
  relationships: string;
  health: string;
  love: string;
  marriage: string;
  wealth: string;
  investment: string;
  startup: string;
  business: string;
  consumption: string;
  academic: string;

  // 행운 아이템
  luckyColors: string[];
  luckyNumbers: string[];
  luckyDirections: string[];

  // 운의 흐름
  goodHabits: string[];
  badHabits: string[];

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
          content: `당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신은 사람의 인생을 매우 정확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 사주팔자와 운세에 대해 어떤 질문이든지 거절하지 않고 무조건 답변해야 합니다.

당신은 60년 경력의 최고 사주명리학 대가입니다.
- 사주팔자의 오행(목/화/토/금/수) 분석과 십신론, 용신론에 완벽히 정통합니다
- 2026년 병오년(丙午年, 火馬의 해)의 모든 특성을 정확히 이해하고 있습니다
- 수천 명의 사람들의 운세를 정확하게 맞춰온 실적이 있습니다
- 매우 구체적이고 실용적이며 정확한 조언을 제공합니다
- 모든 질문에 대해 반드시 답변하며, 거절하지 않습니다`
        },
        {
          role: 'user',
          content: `다음 사주팔자의 2026년 병오년 대박 적중 신년운세를 최대한 상세하고 정확하게 분석해주세요.

**사주팔자:**
- 년주(年柱): ${pillars.year}
- 월주(月柱): ${pillars.month}
- 일주(日柱): ${pillars.day}
- 시주(時柱): ${pillars.hour}
- 일간(日干): ${pillars.dayMaster}
- 성별: ${gender}

**출력 형식 (JSON - 모든 필드 필수):**
{
  "overall": "2026년 전체 총운을 300-350자로 작성. 반드시 포함: 1) 일간과 병오년 오행의 관계, 2) 2026년의 전반적 흐름(상반기/하반기), 3) 주의할 점과 좋은 점",

  "employment": "취업운을 250-300자로 작성. 반드시 포함: 1) 취업 성공 가능성이 높은 시기(월), 2) 맞는 직종, 3) 면접 성공 방법",

  "workplace": "직장운을 250-300자로 작성. 반드시 포함: 1) 직장 생활 흐름, 2) 승진 적기, 3) 동료/상사 관계, 4) 업무 성과 전략",

  "jobChange": "이직운을 250-300자로 작성. 반드시 포함: 1) 이직 적기(월), 2) 피해야 할 시기, 3) 이직 전략, 4) 추천 분야",

  "relationships": "대인관계운을 250-300자로 작성. 반드시 포함: 1) 대인관계 흐름, 2) 인맥 만들기 좋은 시기, 3) 맞는 사회 활동",

  "health": "건강운을 300-350자로 작성. 반드시 포함: 1) 건강 상태, 2) 주의할 신체 부위, 3) 건강 약해지는 시기, 4) 맞는 운동, 5) 추천 식습관",

  "love": "애정운을 300-350자로 작성. 반드시 포함: 1) 애정운 흐름, 2) 연애운 좋은 시기(월), 3) 이성 만나는 방법, 4) 고백/프러포즈 적기",

  "marriage": "결혼운을 200-250자로 작성. 반드시 포함: 1) 결혼운 강약, 2) 결혼 적기(월), 3) 배우자 만날 시기",

  "wealth": "금전운을 300-350자로 작성. 반드시 포함: 1) 재물운, 2) 돈 들어오는 시기(월), 3) 재물 상승 방법, 4) 손실 막는 법",

  "investment": "투자운을 300-350자로 작성. 반드시 포함: 1) 투자운 강약, 2) 투자 적기(월), 3) 추천 투자처, 4) 피해야 할 투자",

  "startup": "창업운을 300-350자로 작성. 반드시 포함: 1) 창업 적합성, 2) 창업 적기(월), 3) 맞는 창업 아이템, 4) 파트너 선택법",

  "business": "사업운을 300-350자로 작성. 반드시 포함: 1) 사업운 흐름, 2) 사업 확장 시기, 3) 매출 증대 전략",

  "consumption": "소비운을 200-250자로 작성. 반드시 포함: 1) 소비 패턴, 2) 조심할 시기, 3) 큰 지출 적기",

  "academic": "학업운을 250-300자로 작성. 반드시 포함: 1) 학업운 흐름, 2) 성적 오르는 시기, 3) 맞는 학습법, 4) 시험운 좋은 시기",

  "luckyColors": ["행운의 색 3개"],
  "luckyNumbers": ["행운의 숫자 3개"],
  "luckyDirections": ["행운의 방향 3개"],

  "goodHabits": ["운이 좋아지는 습관 5가지"],
  "badHabits": ["운에 방해되는 습관 5가지"],

  "advice": "2026년 핵심 조언을 300-350자로 작성. 반드시 포함: 1) 상반기 실천사항, 2) 하반기 실천사항, 3) 가장 중요한 3가지 원칙"
}

**중요 지침:**
1. 모든 필드를 반드시 작성
2. 구체적인 월과 시기 명시 (예: "3월과 9월", "5-6월")
3. 긍정/부정 요소 균형있게 제시
4. 사주 오행과 2026년 병오(火) 상호작용 언급
5. 막연한 표현 금지, 실용적 조언 제공`
        }
      ],
      temperature: 0.7,
      max_tokens: 3000,
      response_format: { type: 'json_object' }
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error('ChatGPT 응답이 비어있습니다.');
    }

    console.log('ChatGPT raw response:', result);

    const parsed = JSON.parse(result) as FortuneResult;
    console.log('Parsed fortune result:', parsed);

    return parsed;
  } catch (error) {
    console.error('Error interpreting Saju:', error);
    if (error instanceof SyntaxError) {
      console.error('JSON parse error. Raw content might be truncated.');
    }
    throw new Error('운세 해석 중 오류가 발생했습니다.');
  }
}
