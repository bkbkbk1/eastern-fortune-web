import { NextRequest, NextResponse } from 'next/server';
import { createChart, getDaxianList, calculateLiunian } from '@orrery/core/ziwei';
import OpenAI from 'openai';
import type { ZiweiChart } from '@orrery/core/types';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

function formatPalacesForGPT(chart: ZiweiChart): string {
  const palaceEntries = Object.entries(chart.palaces);
  return palaceEntries
    .map(([, p]) => {
      const stars = p.stars.map(s => `${s.name}(${s.brightness}${s.siHua ? '/' + s.siHua : ''})`).join(', ');
      return `  ${p.name}궁[${p.ganZhi}]: ${stars || '(공궁)'}`;
    })
    .join('\n');
}

async function interpretZiwei(chart: ZiweiChart, gender: string): Promise<string> {
  const palaceText = formatPalacesForGPT(chart);
  const currentYear = new Date().getFullYear();
  const liunian = calculateLiunian(chart, currentYear);
  const daxianList = getDaxianList(chart);
  const now = new Date();
  const currentDaxian = daxianList.find((d, i) => {
    const next = daxianList[i + 1];
    const endAge = next ? next.ageStart : 999;
    const birthYear = chart.solarYear;
    const currentAge = currentYear - birthYear;
    return currentAge >= d.ageStart && currentAge < endAge;
  });

  const systemPrompt = `당신은 50년 경력의 자미두수(紫微斗數) 전문가입니다. 12궁의 성요 배치를 분석하여 운명을 정확하게 해석합니다.`;

  const userPrompt = `다음 자미두수 명반을 분석해주세요.

**기본 정보:**
- 음력 생년월일: ${chart.lunarYear}년 ${chart.lunarMonth}월 ${chart.lunarDay}일 ${chart.hour}시
- 성별: ${gender}
- 명궁(命宮) 지지: ${chart.mingGongZhi}
- 신궁(身宮) 지지: ${chart.shenGongZhi}
- 오행국(五行局): ${chart.wuXingJu.name}(${chart.wuXingJu.number}국)
- 년간/지: ${chart.yearGan}${chart.yearZhi}

**12궁 성요 배치:**
${palaceText}

${currentDaxian ? `**현재 대한(大限):** ${currentDaxian.ganZhi} (${currentDaxian.ageStart}~${currentDaxian.ageEnd}세, 주요 성: ${currentDaxian.mainStars.join(', ')})` : ''}

**${currentYear}년 유년(流年) 분석:**
- 유년 명궁: ${liunian.mingGongZhi}
- 화록/화권/화과/화기: ${Object.entries(liunian.siHua).map(([k, v]) => `${k}${v}`).join(', ')}

**분석 요청:**
1. 명반 전체 특징 및 격국(格局) 분석 (300자)
2. 명궁(命宮) 및 재백궁(財帛宮) 분석 - 성격과 재물운 (250자)
3. 관록궁(官祿宮) 분석 - 직업/사업운 (200자)
4. 부처궁(夫妻宮) 또는 형제궁(兄弟宮) 분석 - 연애/인간관계운 (200자)
5. ${currentYear}년 유년 운세 종합 분석 (300자)
6. 핵심 조언 3가지

각 항목을 명확히 구분하여 한국어로 작성해주세요.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
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

    const chart = createChart(year, month, day, hour, minute, isMale);
    const daxianList = getDaxianList(chart);
    const currentYear = new Date().getFullYear();
    const liunian = calculateLiunian(chart, currentYear);

    const genderLabel = isMale ? '남성' : '여성';

    const interpretation = await interpretZiwei(chart, genderLabel);

    return NextResponse.json({ chart, daxianList, liunian, interpretation });
  } catch (error) {
    console.error('Ziwei calculation error:', error);
    return NextResponse.json(
      {
        error: '자미두수 계산 중 오류가 발생했습니다',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
