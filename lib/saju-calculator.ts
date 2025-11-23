import { Solar } from 'lunar-typescript';

export interface SajuPillars {
  year: string;
  month: string;
  day: string;
  hour: string;
  dayMaster: string;
}

// 시주 계산을 위한 오자일주표 (일간별 자시 천간)
const hourGanTable: Record<string, string[]> = {
  '甲': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙'],
  '己': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙'],
  '乙': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
  '庚': ['丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁'],
  '丙': ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
  '辛': ['戊', '己', '庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'],
  '丁': ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'],
  '壬': ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'],
  '戊': ['壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  '癸': ['壬', '癸', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
};

function getHourPillar(dayGan: string, hour: number): string {
  const hourBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

  // 시간을 지지로 변환 (23-1시: 子, 1-3시: 丑, ...)
  const branchIndex = Math.floor(((hour + 1) % 24) / 2);
  const hourBranch = hourBranches[branchIndex];

  // 일간에 따른 시간 천간
  const ganArray = hourGanTable[dayGan] || hourGanTable['甲'];
  const hourGan = ganArray[branchIndex];

  return hourGan + hourBranch;
}

export function calculateSaju(
  year: number,
  month: number,
  day: number,
  hour: number
): SajuPillars {
  try {
    const solar = Solar.fromYmd(year, month, day);
    const lunar = solar.getLunar();

    const yearPillar = lunar.getYearInGanZhi();
    const monthPillar = lunar.getMonthInGanZhi();
    const dayPillar = lunar.getDayInGanZhi();
    const dayGan = dayPillar.charAt(0); // 일간 추출
    const hourPillar = getHourPillar(dayGan, hour);

    return {
      year: yearPillar,
      month: monthPillar,
      day: dayPillar,
      hour: hourPillar,
      dayMaster: dayGan
    };
  } catch (error) {
    console.error('Error calculating Saju:', error);
    throw new Error('사주 계산 중 오류가 발생했습니다.');
  }
}

// 천간 이름
export const ganNames: Record<string, string> = {
  '甲': '갑목',
  '乙': '을목',
  '丙': '병화',
  '丁': '정화',
  '戊': '무토',
  '己': '기토',
  '庚': '경금',
  '辛': '신금',
  '壬': '임수',
  '癸': '계수'
};
