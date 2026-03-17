// Pure implementation of Four Pillars (사주팔자) calculation
// No external dependencies - replaces @orrery/core

const STEMS = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'] as const;
const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'] as const;

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

export interface DaewoonItem {
  ganzi: string;
  age: number;
  startDate: string;
  stemSipsin: string;
  branchSipsin: string;
  ageStart: number;
  ageEnd: number;
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

function ganzi(stemIdx: number, branchIdx: number): string {
  return STEMS[((stemIdx % 10) + 10) % 10] + BRANCHES[((branchIdx % 12) + 12) % 12];
}

// Year pillar (년주)
function yearPillar(year: number): { stemIdx: number; branchIdx: number } {
  return {
    stemIdx: ((year - 4) % 10 + 10) % 10,
    branchIdx: ((year - 4) % 12 + 12) % 12,
  };
}

// Month pillar (월주) — approximate without solar term tables
// Calendar month → branch: Jan=丑(1), Feb=寅(2), ..., Dec=子(0)
function monthPillar(year: number, month: number): { stemIdx: number; branchIdx: number } {
  const branchMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0]; // Jan-Dec
  const branchIdx = branchMap[month - 1];

  // 五虎遁年法: base stem for 寅月 by year stem
  const yearStemIdx = ((year - 4) % 10 + 10) % 10;
  const baseStems = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const baseStem = baseStems[yearStemIdx];
  const monthOrder = month >= 2 ? month - 2 : 11; // 寅月=0, 卯月=1, ..., 丑月=11
  const stemIdx = (baseStem + monthOrder) % 10;

  return { stemIdx, branchIdx };
}

// Day pillar (일주) using reference: Jan 1, 2000 = 庚辰 (stem:6, branch:4)
function dayPillar(year: number, month: number, day: number): { stemIdx: number; branchIdx: number } {
  const ref = new Date(Date.UTC(2000, 0, 1));
  const date = new Date(Date.UTC(year, month - 1, day));
  const diff = Math.round((date.getTime() - ref.getTime()) / 86400000);
  return {
    stemIdx: ((6 + diff) % 10 + 10) % 10,
    branchIdx: ((4 + diff) % 12 + 12) % 12,
  };
}

// Hour pillar (시주)
function hourPillar(dayStemIdx: number, hour: number): { stemIdx: number; branchIdx: number } {
  const branchIdx = hour === 23 ? 0 : Math.floor((hour + 1) / 2) % 12;
  // 五子遁日法: base stem for 子時 by day stem
  const baseStems = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
  const stemIdx = (baseStems[dayStemIdx] + branchIdx) % 10;
  return { stemIdx, branchIdx };
}

// Basic daewoon (대운) calculation
function calcDaewoon(
  yearStemIdx: number,
  monthStemIdx: number,
  monthBranchIdx: number,
  gender: 'M' | 'F',
  birthYear: number
): DaewoonItem[] {
  const isYangYear = yearStemIdx % 2 === 0;
  const forward = (isYangYear && gender === 'M') || (!isYangYear && gender === 'F');
  const dir = forward ? 1 : -1;
  const startAge = 5;

  return Array.from({ length: 8 }, (_, i) => {
    const stemIdx = ((monthStemIdx + dir * (i + 1)) % 10 + 10) % 10;
    const branchIdx = ((monthBranchIdx + dir * (i + 1)) % 12 + 12) % 12;
    const age = startAge + i * 10;
    return {
      ganzi: ganzi(stemIdx, branchIdx),
      age,
      startDate: `${birthYear + age}-01-01`,
      stemSipsin: STEMS[stemIdx],
      branchSipsin: BRANCHES[branchIdx],
      ageStart: age,
      ageEnd: age + 9,
    };
  });
}

function emptyDetail(gz: string): SajuPillarDetail {
  return { ganzi: gz, stemSipsin: '', branchSipsin: '', unseong: '', sinsal: '', jigang: '' };
}

export const ganNames: Record<string, string> = {
  '甲': '갑목', '乙': '을목', '丙': '병화', '丁': '정화', '戊': '무토',
  '己': '기토', '庚': '경금', '辛': '신금', '壬': '임수', '癸': '계수',
};

export function calculateSaju(
  year: number, month: number, day: number,
  hour: number, _minute = 0, _gender: 'M' | 'F' = 'M'
): SajuPillars {
  const yp = yearPillar(year);
  const mp = monthPillar(year, month);
  const dp = dayPillar(year, month, day);
  const hp = hourPillar(dp.stemIdx, hour);
  return {
    year: ganzi(yp.stemIdx, yp.branchIdx),
    month: ganzi(mp.stemIdx, mp.branchIdx),
    day: ganzi(dp.stemIdx, dp.branchIdx),
    hour: ganzi(hp.stemIdx, hp.branchIdx),
    dayMaster: STEMS[dp.stemIdx],
  };
}

export function calculateSajuEnriched(
  year: number, month: number, day: number,
  hour: number, minute = 0, gender: 'M' | 'F' = 'M'
): EnrichedSajuData {
  const yp = yearPillar(year);
  const mp = monthPillar(year, month);
  const dp = dayPillar(year, month, day);
  const hp = hourPillar(dp.stemIdx, hour);

  const pillars: SajuPillars = {
    year: ganzi(yp.stemIdx, yp.branchIdx),
    month: ganzi(mp.stemIdx, mp.branchIdx),
    day: ganzi(dp.stemIdx, dp.branchIdx),
    hour: ganzi(hp.stemIdx, hp.branchIdx),
    dayMaster: STEMS[dp.stemIdx],
  };

  return {
    pillars,
    pillarDetails: {
      year: emptyDetail(pillars.year),
      month: emptyDetail(pillars.month),
      day: emptyDetail(pillars.day),
      hour: emptyDetail(pillars.hour),
    },
    daewoon: calcDaewoon(yp.stemIdx, mp.stemIdx, mp.branchIdx, gender, year),
  };
}
