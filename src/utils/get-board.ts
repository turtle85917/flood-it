/**
 * 색깔 목록
 */
export const colors: Color[] = ["red", "yellow", "green", "blue", "purple", "brown"];

/**
 * Flood 게임 판 생성
 * @param size 판 사이즈
 */
export default (size: number): Flood[] => {
  const result: Flood[] = [];

  for (let idx = 0; idx < size ** 2; idx++) {
    result.push({ color: colors.sort(() => Math.random() - 0.5)[0] });
  }

  return result;
}