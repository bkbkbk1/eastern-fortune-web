import { NextRequest, NextResponse } from 'next/server';
import { createChart, getDaxianList, calculateLiunian } from '@orrery/core/ziwei';
import type { ZiweiChart } from '@orrery/core/types';
import OpenAI from 'openai';
import { FORTUNE_YEAR } from '@/lib/fortune-year';

const openaiClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not configured');
  return new OpenAI({ apiKey });
};

function formatPalacesForGPT(chart: ZiweiChart): string {
  const palaceEntries = Object.entries(chart.palaces);
  return palaceEntries
    .map(([, p]) => {
      const stars = p.stars
        .map((s) => `${s.name}(${s.brightness}${s.siHua ? '/' + s.siHua : ''})`)
        .join(', ');
      return `  ${p.name}궁[${p.ganZhi}]: ${stars || '(공궁)'}`;
    })
    .join('\n');
}

async function interpretZiwei(
  chart: ZiweiChart,
  genderLabel: string,
  language: string
): Promise<string> {
  const palaceText = formatPalacesForGPT(chart);
  // 신년운세 기준 연도(정미년). lib/fortune-year.ts 값만 바꾸면 함께 움직인다.
  const currentYear = FORTUNE_YEAR;
  const liunian = calculateLiunian(chart, currentYear);
  const daxianList = getDaxianList(chart);
  const currentAge = currentYear - chart.solarYear;
  const currentDaxian = daxianList.find((d, i) => {
    const next = daxianList[i + 1];
    const endAge = next ? next.ageStart : 999;
    return currentAge >= d.ageStart && currentAge < endAge;
  });

  const systemPrompt =
    language === 'en'
      ? `You are a Zi Wei Dou Shu (Purple Star Astrology) master with 50 years of experience. You read the placement of stars across the 12 palaces and interpret a person's destiny precisely.`
      : `당신은 50년 경력의 자미두수(紫微斗數) 전문가입니다. 12궁의 성요 배치를 분석하여 운명을 정확하게 해석합니다.`;

  const requestBody =
    language === 'en'
      ? `Analyze the Zi Wei Dou Shu chart below.

**Basic information:**
- Lunar birth date: ${chart.lunarYear}-${chart.lunarMonth}-${chart.lunarDay} ${chart.hour}:00
- Gender: ${genderLabel}
- Life Palace (命宮) branch: ${chart.mingGongZhi}
- Body Palace (身宮) branch: ${chart.shenGongZhi}
- Five Element Bureau (五行局): ${chart.wuXingJu.name}
- Year stem/branch: ${chart.yearGan}${chart.yearZhi}

**Star placement across the 12 palaces:**
${palaceText}

${currentDaxian ? `**Current Major Period (大限):** ${currentDaxian.ganZhi} (ages ${currentDaxian.ageStart}-${currentDaxian.ageEnd}, main stars: ${currentDaxian.mainStars.join(', ')})` : ''}

**${currentYear} annual (流年, Year of the Fire Sheep 丁未) analysis:**
- Annual Life Palace: ${liunian.mingGongZhi}
- Transformations: ${Object.entries(liunian.siHua).map(([k, v]) => `${k}${v}`).join(', ')}

**What to write:**
1. Overall pattern and structure of the chart (about 300 words)
2. Life Palace (命宮) and Wealth Palace (財帛宮) — personality and money (about 250 words)
3. Career Palace (官祿宮) — work and business (about 200 words)
4. Spouse Palace (夫妻宮) — love and relationships (about 200 words)
5. ${currentYear} annual fortune summary (about 300 words)
6. Three key pieces of advice

Write in English and keep each item clearly separated.`
      : `다음 자미두수 명반을 분석해주세요.

**기본 정보:**
- 음력 생년월일: ${chart.lunarYear}년 ${chart.lunarMonth}월 ${chart.lunarDay}일 ${chart.hour}시
- 성별: ${genderLabel}
- 명궁(命宮) 지지: ${chart.mingGongZhi}
- 신궁(身宮) 지지: ${chart.shenGongZhi}
- 오행국(五行局): ${chart.wuXingJu.name}(${chart.wuXingJu.number}국)
- 년간/지: ${chart.yearGan}${chart.yearZhi}

**12궁 성요 배치:**
${palaceText}

${currentDaxian ? `**현재 대한(大限):** ${currentDaxian.ganZhi} (${currentDaxian.ageStart}~${currentDaxian.ageEnd}세, 주요 성: ${currentDaxian.mainStars.join(', ')})` : ''}

**${currentYear}년 정미년 유년(流年) 분석:**
- 유년 명궁: ${liunian.mingGongZhi}
- 화록/화권/화과/화기: ${Object.entries(liunian.siHua).map(([k, v]) => `${k}${v}`).join(', ')}

**분석 요청:**
1. 명반 전체 특징 및 격국(格局) 분석 (300자)
2. 명궁(命宮) 및 재백궁(財帛宮) 분석 - 성격과 재물운 (250자)
3. 관록궁(官祿宮) 분석 - 직업/사업운 (200자)
4. 부처궁(夫妻宮) 분석 - 연애/인간관계운 (200자)
5. ${currentYear}년 유년 운세 종합 분석 (300자)
6. 핵심 조언 3가지

각 항목을 명확히 구분하여 한국어로 작성해주세요.`;

  const completion = await openaiClient().chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: requestBody },
    ],
    temperature: 0.7,
    max_tokens: 2000,
  });

  return completion.choices[0].message.content || '';
}

export async function POST(req: NextRequest) {
  try {
    const { birthDate, birthHour, birthMinute, gender, language = 'ko' } = await req.json();

    if (!birthDate || birthDate.length !== 8) {
      return NextResponse.json(
        { error: language === 'en' ? 'Please enter birth date in 8 digits' : '생년월일을 8자리로 입력해주세요' },
        { status: 400 }
      );
    }

    const year = parseInt(birthDate.substring(0, 4));
    const month = parseInt(birthDate.substring(4, 6));
    const day = parseInt(birthDate.substring(6, 8));
    const hour = parseInt(birthHour || '12');
    const minute = parseInt(birthMinute || '0');
    const isMale = gender !== 'female';

    if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day) ||
        !Number.isFinite(hour) || !Number.isFinite(minute) ||
        year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) {
      return NextResponse.json(
        { error: language === 'en' ? 'Invalid birth date' : '생년월일이 올바르지 않습니다' },
        { status: 400 }
      );
    }

    const chart = createChart(year, month, day, hour, minute, isMale);
    const daxianList = getDaxianList(chart);
    const currentYear = FORTUNE_YEAR;
    const liunian = calculateLiunian(chart, currentYear);

    const genderLabel =
      language === 'en' ? (isMale ? 'Male' : 'Female') : isMale ? '남성' : '여성';

    const interpretation = await interpretZiwei(chart, genderLabel, language);

    return NextResponse.json({ chart, daxianList, liunian, interpretation });
  } catch (error) {
    console.error('Ziwei calculation error:', error);
    return NextResponse.json(
      {
        error: '자미두수 계산 중 오류가 발생했습니다',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
