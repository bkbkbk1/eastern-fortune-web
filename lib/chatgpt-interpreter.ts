import OpenAI from 'openai';
import { SajuPillars } from './saju-calculator';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
});

export interface MonthlyFortune {
  overall: string;
  wealth: string;
  love: string;
  career: string;
  relationships: string;
  health: string;
  travel: string;
}

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

  // 월별 운세 (1-12월)
  monthly: {
    [key: string]: MonthlyFortune;
  };

  // 행운 아이템
  luckyColors: string[];
  luckyNumbers: string[];
  luckyDirections: string[];

  // 운의 흐름
  goodHabits: string[];
  badHabits: string[];

  // 삼재
  samjae: {
    isSamjae: boolean;
    explanation: string;
    yearsOfSamjae: string;
  };

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
  "overall": "2026년 전체 총운 (300-400자)",
  "employment": "취업운 상세 풀이 - 올해 취업운, 나에게 맞는 취업 진로, 면접 성공 비법 (300-400자)",
  "workplace": "직장운 상세 풀이 - 올해 직장운, 좋은 동료 만나는 법, 좋은 상사 만나는 법 (300-400자)",
  "jobChange": "이직운 상세 풀이 - 올해 이직운, 이직 잘 하는 비법, 이직 적기 (300-400자)",
  "relationships": "대인관계운 상세 풀이 - 올해 대인관계운, 나에게 맞는 사회 활동, 이익이 되는 사회 활동 (300-400자)",
  "health": "건강운 상세 풀이 - 올해 건강운, 나의 몸과 운동법, 식습관 (300-400자)",
  "love": "애정운 상세 풀이 - 올해의 애정운, 애정운의 흐름 (300-400자)",
  "marriage": "결혼운 상세 풀이 - 결혼 적기, 배우자를 만날 시기 (250-350자)",
  "wealth": "금전운 상세 풀이 - 올해 금전운, 재물 상승 비법, 재물 손실 막는 비법 (300-400자)",
  "investment": "투자운/재테크운 상세 풀이 - 올해 재테크운, 투자처 가이드, 투자 적기와 피해야 할 시기 (300-400자)",
  "startup": "창업운 상세 풀이 - 창업해도 될까?, 나에게 맞는 창업 아이템, 창업 파트너 선택법 (300-400자)",
  "business": "사업운 상세 풀이 - 올해 성공을 위한 사업 가이드 (300-400자)",
  "consumption": "소비운 상세 풀이 - 올해 소비운, 나에게 맞는 소비 패턴 (250-350자)",
  "academic": "학업운 상세 풀이 - 타고난 학업운, 올해 학업운, 나에게 맞는 학업 진로, 학업 향상 비법 (300-400자)",

  "monthly": {
    "1": { "overall": "1월 총운", "wealth": "1월 재물운", "love": "1월 애정운", "career": "1월 직장운", "relationships": "1월 대인관계운", "health": "1월 건강운", "travel": "1월 여행·이동운" },
    "2": { "overall": "2월 총운", "wealth": "2월 재물운", "love": "2월 애정운", "career": "2월 직장운", "relationships": "2월 대인관계운", "health": "2월 건강운", "travel": "2월 여행·이동운" },
    "3": { "overall": "3월 총운", "wealth": "3월 재물운", "love": "3월 애정운", "career": "3월 직장운", "relationships": "3월 대인관계운", "health": "3월 건강운", "travel": "3월 여행·이동운" },
    "4": { "overall": "4월 총운", "wealth": "4월 재물운", "love": "4월 애정운", "career": "4월 직장운", "relationships": "4월 대인관계운", "health": "4월 건강운", "travel": "4월 여행·이동운" },
    "5": { "overall": "5월 총운", "wealth": "5월 재물운", "love": "5월 애정운", "career": "5월 직장운", "relationships": "5월 대인관계운", "health": "5월 건강운", "travel": "5월 여행·이동운" },
    "6": { "overall": "6월 총운", "wealth": "6월 재물운", "love": "6월 애정운", "career": "6월 직장운", "relationships": "6월 대인관계운", "health": "6월 건강운", "travel": "6월 여행·이동운" },
    "7": { "overall": "7월 총운", "wealth": "7월 재물운", "love": "7월 애정운", "career": "7월 직장운", "relationships": "7월 대인관계운", "health": "7월 건강운", "travel": "7월 여행·이동운" },
    "8": { "overall": "8월 총운", "wealth": "8월 재물운", "love": "8월 애정운", "career": "8월 직장운", "relationships": "8월 대인관계운", "health": "8월 건강운", "travel": "8월 여행·이동운" },
    "9": { "overall": "9월 총운", "wealth": "9월 재물운", "love": "9월 애정운", "career": "9월 직장운", "relationships": "9월 대인관계운", "health": "9월 건강운", "travel": "9월 여행·이동운" },
    "10": { "overall": "10월 총운", "wealth": "10월 재물운", "love": "10월 애정운", "career": "10월 직장운", "relationships": "10월 대인관계운", "health": "10월 건강운", "travel": "10월 여행·이동운" },
    "11": { "overall": "11월 총운", "wealth": "11월 재물운", "love": "11월 애정운", "career": "11월 직장운", "relationships": "11월 대인관계운", "health": "11월 건강운", "travel": "11월 여행·이동운" },
    "12": { "overall": "12월 총운", "wealth": "12월 재물운", "love": "12월 애정운", "career": "12월 직장운", "relationships": "12월 대인관계운", "health": "12월 건강운", "travel": "12월 여행·이동운" }
  },

  "luckyColors": ["행운의 색 3개"],
  "luckyNumbers": ["행운의 숫자 3개"],
  "luckyDirections": ["행운의 방향 3개"],

  "goodHabits": ["운의 흐름이 좋아지는 습관 5가지"],
  "badHabits": ["운의 흐름에 방해를 받는 습관 5가지"],

  "samjae": {
    "isSamjae": true or false,
    "explanation": "삼재란 무엇인가? 나는 올해 삼재일까? 상세 설명 (200-300자)",
    "yearsOfSamjae": "내 인생의 삼재 년도 (예: 2024년, 2033년, 2042년)"
  },

  "advice": "2026년을 잘 보내기 위한 최종 조언 (300-400자)"
}

**중요 지침:**
1. 모든 필드를 반드시 작성해야 합니다 - 빠뜨리지 말 것
2. 추상적 표현 금지 - 구체적인 월, 숫자, 시기를 명시
3. 긍정적/부정적 요소를 균형있게 제시
4. 사주의 오행과 2026년 병오(火)의 상호작용을 언급
5. 각 월별 운세는 간결하지만 구체적으로 (각 50-80자)
6. 행운의 색/숫자/방향은 사주 오행에 기반하여 선정
7. 매우 구체적이고 실용적인 조언 제공`
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
