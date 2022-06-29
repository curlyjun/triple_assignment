/**
 *
 * @param progress 진척도 (0 ~ 1)
 * @returns easeOutQuint 처리된 진척도
 * @ref https://easings.net/ko#easeOutQuint,
 */
export const easeOutQuint = (progress: number) => {
  return 1 - Math.pow(1 - progress, 5)
}
