/**
 * Horner方法
 * 这种方法通过对每个字符进行多项式计算的方式，得出最终的哈希值。具体来说，对于字符串 S，可以将其视为多项式：
 * S(x) = a0 + a1 * x + a2 * x^2 + … + an * x^n，其中 a0 ~ an 是字符串中每个字符的 ASCII 码，x 是一个常数。
 * 对于 Horner 方法，选择一个大质数 p 和一个常数 x，计算公式如下：
 * S(x) % p = (a0 + x * (a1 + x * (a2 + ... + x * (an-1 + x * an) ... ))) % p
 */

function hashCode(s) {
    const p = 31; //质数，取31效果比较好
    const m = 1e9 + 9; //大质数，避免哈希码相同的问题
    let hash = 0;
    let x = 1;
    for (let i = 0; i < s.length; i++) {
      hash = (hash + s.charCodeAt(i) * x) % m;
      x = (x * p) % m;
    }
    return hash;
}
  
// 示例
let s = "hello";
console.log(hashCode(s)); // 输出：105835282



