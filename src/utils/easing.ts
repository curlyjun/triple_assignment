/**
 *
 * @param progress 진척도 (0 ~ 1)
 * @returns easeOutCubic 처리된 진척도
 * @ref https://easings.net/ko#easeOutCubic,
 */
export const easeOutCubic = (progress: number) => {
  return 1 - Math.pow(1 - progress, 3)
}
