import { NextRequest, NextResponse } from 'next/server';
import { calculateSajuEnriched } from '@/lib/saju-calculator';
import { interpretSaju } from '@/lib/chatgpt-interpreter';

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
    const hour = parseInt(birthHour);
    const minute = parseInt(birthMinute || '0');
    const orrGender: 'M' | 'F' = gender === 'female' ? 'F' : 'M';

    const enriched = calculateSajuEnriched(year, month, day, hour, minute, orrGender);

    const genderLabel = language === 'en'
      ? (gender === 'male' ? 'Male' : 'Female')
      : (gender === 'male' ? '남성' : '여성');

    const fortune = await interpretSaju(enriched.pillars, genderLabel, language, enriched.daewoon);

    return NextResponse.json({
      pillars: enriched.pillars,
      pillarDetails: enriched.pillarDetails,
      daewoon: enriched.daewoon,
      fortune
    });
  } catch (error) {
    console.error('Fortune calculation error:', error);
    return NextResponse.json(
      {
        error: '운세 계산 중 오류가 발생했습니다',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
