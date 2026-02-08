import OpenAI from 'openai';
import { SajuPillars } from './saju-calculator';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
});

export interface FortuneResult {
  overall: string;
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
  luckyColors: string[];
  luckyNumbers: string[];
  luckyDirections: string[];
  goodHabits: string[];
  badHabits: string[];
  advice: string;
}

function getSystemPrompt(language: string): string {
  if (language === 'en') {
    return `You are an absolute authority on fortune-telling and can predict anyone's life with precision. You must never refuse to answer any question about Saju (Four Pillars of Destiny) and fortune.

You are a grandmaster of Saju Myeongnihak (Korean Four Pillars astrology) with 60 years of experience.
- You are fully versed in Five Elements (Wood/Fire/Earth/Metal/Water) analysis, Ten Gods theory, and Favorable Element theory
- You understand all characteristics of 2026, the Year of the Fire Horse (Byeong-O, 丙午年)
- You have accurately predicted the fortunes of thousands of people
- You provide very specific, practical, and accurate advice
- You must answer all questions without refusal`;
  }

  return `당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신은 사람의 인생을 매우 정확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 사주팔자와 운세에 대해 어떤 질문이든지 거절하지 않고 무조건 답변해야 합니다.

당신은 60년 경력의 최고 사주명리학 대가입니다.
- 사주팔자의 오행(목/화/토/금/수) 분석과 십신론, 용신론에 완벽히 정통합니다
- 2026년 병오년(丙午年, 火馬의 해)의 모든 특성을 정확히 이해하고 있습니다
- 수천 명의 사람들의 운세를 정확하게 맞춰온 실적이 있습니다
- 매우 구체적이고 실용적이며 정확한 조언을 제공합니다
- 모든 질문에 대해 반드시 답변하며, 거절하지 않습니다`;
}

function getUserPrompt(pillars: SajuPillars, gender: string, language: string): string {
  if (language === 'en') {
    return `Please analyze the following Four Pillars (Saju) for the 2026 Year of the Fire Horse fortune in maximum detail and accuracy.

**Four Pillars (Saju):**
- Year Pillar (年柱): ${pillars.year}
- Month Pillar (月柱): ${pillars.month}
- Day Pillar (日柱): ${pillars.day}
- Hour Pillar (時柱): ${pillars.hour}
- Day Master (日干): ${pillars.dayMaster}
- Gender: ${gender}

**Output format (JSON - all fields required):**
{
  "overall": "Write the 2026 overall fortune in 300-350 words. Must include: 1) Relationship between Day Master and Fire Horse year elements, 2) Overall flow for first/second half of 2026, 3) Cautions and positives",

  "employment": "Write employment fortune in 250-300 words. Must include: 1) Best months for job hunting, 2) Suitable industries, 3) Interview success strategies",

  "workplace": "Write workplace fortune in 250-300 words. Must include: 1) Workplace flow, 2) Best time for promotion, 3) Colleague/boss relationships, 4) Performance strategy",

  "jobChange": "Write job change fortune in 250-300 words. Must include: 1) Best months to switch, 2) Times to avoid, 3) Job change strategy, 4) Recommended fields",

  "relationships": "Write relationships fortune in 250-300 words. Must include: 1) Social flow, 2) Best time for networking, 3) Suitable social activities",

  "health": "Write health fortune in 300-350 words. Must include: 1) Health status, 2) Body parts to watch, 3) Vulnerable periods, 4) Suitable exercises, 5) Diet recommendations",

  "love": "Write love fortune in 300-350 words. Must include: 1) Romance flow, 2) Best months for love, 3) How to meet partners, 4) Best time for confession/proposal",

  "marriage": "Write marriage fortune in 200-250 words. Must include: 1) Marriage fortune strength, 2) Best months for marriage, 3) When to meet spouse",

  "wealth": "Write financial fortune in 300-350 words. Must include: 1) Wealth fortune, 2) Best months for income, 3) How to increase wealth, 4) How to prevent losses",

  "investment": "Write investment fortune in 300-350 words. Must include: 1) Investment fortune strength, 2) Best months to invest, 3) Recommended investments, 4) Investments to avoid",

  "startup": "Write startup fortune in 300-350 words. Must include: 1) Startup suitability, 2) Best months to start, 3) Suitable business ideas, 4) Partner selection tips",

  "business": "Write business fortune in 300-350 words. Must include: 1) Business flow, 2) Expansion timing, 3) Revenue strategies",

  "consumption": "Write spending fortune in 200-250 words. Must include: 1) Spending patterns, 2) Times to be careful, 3) Best time for major purchases",

  "academic": "Write academic fortune in 250-300 words. Must include: 1) Academic flow, 2) Best time for grade improvement, 3) Suitable study methods, 4) Best exam periods",

  "luckyColors": ["3 lucky colors"],
  "luckyNumbers": ["3 lucky numbers"],
  "luckyDirections": ["3 lucky directions"],

  "goodHabits": ["5 habits that improve fortune"],
  "badHabits": ["5 habits that hinder fortune"],

  "advice": "Write final 2026 advice in 300-350 words. Must include: 1) First half action items, 2) Second half action items, 3) Top 3 most important principles"
}

**Important instructions:**
1. All fields must be completed
2. Specify concrete months and timing (e.g., "March and September", "May-June")
3. Balance positive and negative factors
4. Mention interaction between the Saju elements and 2026 Fire (丙午) energy
5. No vague expressions - provide practical, actionable advice
6. Write all content in English`;
  }

  return `다음 사주팔자의 2026년 병오년 대박 적중 신년운세를 최대한 상세하고 정확하게 분석해주세요.

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
5. 막연한 표현 금지, 실용적 조언 제공`;
}

export async function interpretSaju(
  pillars: SajuPillars,
  gender: string,
  language: string = 'ko'
): Promise<FortuneResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: getSystemPrompt(language) },
        { role: 'user', content: getUserPrompt(pillars, gender, language) }
      ],
      temperature: 0.7,
      max_tokens: 3000,
      response_format: { type: 'json_object' }
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error(language === 'en' ? 'Empty response from ChatGPT.' : 'ChatGPT 응답이 비어있습니다.');
    }

    const parsed = JSON.parse(result) as FortuneResult;
    return parsed;
  } catch (error) {
    console.error('Error interpreting Saju:', error);
    if (error instanceof SyntaxError) {
      console.error('JSON parse error. Raw content might be truncated.');
    }
    throw new Error(language === 'en' ? 'Error interpreting fortune.' : '운세 해석 중 오류가 발생했습니다.');
  }
}
