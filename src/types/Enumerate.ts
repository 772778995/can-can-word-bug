/**
 * 构建一个连续的数字枚举类型，最大不超过 999
 * @see https://www.fullstackbb.com/typescript/type-in-certain-number-range/#:~:text=%E4%BD%BF%E7%94%A8%20TypeScript%20%E7%B1%BB%E5%9E%8B%E9%99%90%E5%AE%9A%E6%95%B0%E5%AD%97%E7%9A%84%E8%8C%83%E5%9B%B4%201%20%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%20%E5%A6%82%E6%9E%9C%E6%98%AF%E6%AF%94%E8%BE%83%E5%B0%8F%E7%9A%84%E8%8C%83%E5%9B%B4%E5%A6%82%201~10%20%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BD%BF%E7%94%A8%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%85%A8%E9%83%A8%E6%9E%9A%E4%B8%BE%E5%87%BA%E6%9D%A5%EF%BC%9A,0%20%E5%88%B0%E6%8C%87%E5%AE%9A%E6%95%B0%E5%80%BC%E7%9A%84%E6%9E%9A%E4%B8%BE%EF%BC%8C%E6%9C%89%E6%97%B6%E5%80%99%E6%88%91%E4%BB%AC%E4%B8%8D%E6%83%B3%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%EF%BC%8C%E8%80%8C%E6%98%AF%E5%B8%8C%E6%9C%9B%E9%99%90%E5%AE%9A%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%8C%BA%E9%97%B4%EF%BC%8C%E5%80%9F%E5%8A%A9%20Exclude%20%E5%8F%AF%E4%BB%A5%E5%BE%88%E7%AE%80%E5%8D%95%E5%B0%B1%E8%83%BD%E5%AE%9E%E7%8E%B0%EF%BC%9A%20...%205%20%E9%99%90%E5%AE%9A%E5%B0%8F%E6%95%B0%E8%8C%83%E5%9B%B4%20
 * @example
 * type ToFive = Enumerate<5> // 0 | 1 | 2 | 3 | 4
 */
type Enumerate<T extends number, R extends number[] = []> = R['length'] extends T
  ? R[number]
  : Enumerate<T, [R['length'], ...R]>

export default Enumerate
