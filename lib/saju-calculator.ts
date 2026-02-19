import { calculateSaju as orrCalc } from '@orrery/core/saju';
import type { BirthInput, SajuResult, DaewoonItem } from '@orrery/core/types';

export interface SajuPillars {
  year: string;
  month: string;
  day: string;
  hour: string;
  dayMaster: string;
}

export interface SajuPillarDetail {
  ganzi: string;
  stemSipsin: string;
  branchSipsin: string;
  unseong: string;
  sinsal: string;
  jigang: string;
}

export interface EnrichedSajuData {
  pillars: SajuPillars;
  pillarDetails: {
    year: SajuPillarDetail;
    month: SajuPillarDetail;
    day: SajuPillarDetail;
    hour: SajuPillarDetail;
  };
  daewoon: DaewoonItem[];
}

function toPillarDetail(p: SajuResult['pillars'][number]): SajuPillarDetail {
  return {
    ganzi: p.pillar.ganzi,
    stemSipsin: p.stemSipsin,
    branchSipsin: p.branchSipsin,
    unseong: p.unseong,
    sinsal: p.sinsal,
    jigang: p.jigang,
  };
}

// pillars 배열 순서: [시주(0), 일주(1), 월주(2), 년주(3)]
export function calculateSaju(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number = 0,
  gender: 'M' | 'F' = 'M'
): SajuPillars {
  const input: BirthInput = { year, month, day, hour, minute, gender };
  const result = orrCalc(input);
  const [hourP, dayP, monthP, yearP] = result.pillars;

  return {
    year: yearP.pillar.ganzi,
    month: monthP.pillar.ganzi,
    day: dayP.pillar.ganzi,
    hour: hourP.pillar.ganzi,
    dayMaster: dayP.pillar.stem,
  };
}

export function calculateSajuEnriched(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number = 0,
  gender: 'M' | 'F' = 'M'
): EnrichedSajuData {
  const input: BirthInput = { year, month, day, hour, minute, gender };
  const result = orrCalc(input);
  const [hourP, dayP, monthP, yearP] = result.pillars;

  return {
    pillars: {
      year: yearP.pillar.ganzi,
      month: monthP.pillar.ganzi,
      day: dayP.pillar.ganzi,
      hour: hourP.pillar.ganzi,
      dayMaster: dayP.pillar.stem,
    },
    pillarDetails: {
      year: toPillarDetail(yearP),
      month: toPillarDetail(monthP),
      day: toPillarDetail(dayP),
      hour: toPillarDetail(hourP),
    },
    daewoon: result.daewoon,
  };
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
