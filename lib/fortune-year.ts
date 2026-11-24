/**
 * 이 사이트가 풀어 주는 운세의 기준 연도.
 *
 * 해가 바뀌면(입춘 기준) 아래 세 값만 고치면 된다.
 * - API 라우트(app/api/calculate-ziwei)의 유년(流年)·대한 나이 계산
 * - 사주 해석 프롬프트(lib/chatgpt-interpreter.ts)
 * - 자미두수 화면(app/ziwei)의 현재 대한 판정
 */
export const FORTUNE_YEAR = 2027;

/** 2027년 간지: 정미(丁未) — 천간 정화(陰火), 지지 미토(陰土), 양띠 */
export const FORTUNE_YEAR_GANZHI = "정미(丁未)";
export const FORTUNE_YEAR_LABEL_KO = "2027년 정미년";
export const FORTUNE_YEAR_LABEL_EN = "2027, the Year of the Fire Sheep";
