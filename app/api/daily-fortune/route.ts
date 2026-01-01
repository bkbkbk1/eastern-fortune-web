import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { birthDate } = await request.json();

    if (!birthDate || birthDate.length !== 8) {
      return NextResponse.json(
        { error: '올바른 생년월일을 입력해주세요 (YYYYMMDD)' },
        { status: 400 }
      );
    }

    const today = new Date();
    const todayStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const year = birthDate.substring(0, 4);
    const month = birthDate.substring(4, 6);
    const day = birthDate.substring(6, 8);
    const birthDateStr = `${year}년 ${month}월 ${day}일`;

    const prompt = `당신은 60년 경력의 사주명리 전문가입니다.

오늘 날짜: ${todayStr}
생년월일: ${birthDateStr}

위 생년월일을 가진 사람의 오늘 운세를 분석해주세요.

다음 형식의 JSON으로 응답해주세요:
{
  "message": "오늘의 한마디 (30-50자, 긍정적이고 실용적인 조언)",
  "wealth": "오늘의 재물운 (40-60자)",
  "love": "오늘의 애정운 (40-60자)",
  "health": "오늘의 건강운 (40-60자)",
  "work": "오늘의 직장운 (40-60자)",
  "luckyColor": "행운의 색깔 (1가지)",
  "luckyNumber": "행운의 숫자 (1개)",
  "luckyTime": "행운의 시간대 (예: 오전 10-12시)",
  "advice": "오늘의 조언 (30-50자)"
}

중요:
- 구체적이고 실용적인 조언
- 오늘 하루에 집중
- 긍정적이지만 현실적으로`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: '당신은 60년 경력의 사주명리 전문가입니다. 매일 사람들에게 실용적이고 긍정적인 운세를 제공합니다.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error('No response from OpenAI');
    }

    const fortune = JSON.parse(result);

    return NextResponse.json({
      date: todayStr,
      birthDate: birthDateStr,
      fortune,
    });
  } catch (error) {
    console.error('Daily fortune error:', error);
    return NextResponse.json(
      { error: '운세 계산 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
