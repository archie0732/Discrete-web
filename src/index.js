export function extendedGCD(a, b) {
  if (b === 0) {
    return [a, 1, 0];
  }
  const [gcd, x1, y1] = extendedGCD(b, a % b);
  const x = y1;
  const y = x1 - Math.floor(a / b) * y1;
  return [gcd, x, y];
}

export function modInverse(a, m) {
  const [gcd, x] = extendedGCD(a, m);
  if (gcd !== 1) {
    return "模逆元素不存在";
  }
  return ((x % m) + m) % m; 
}

export function slove(a, m) {
  if (m == "" || a == "") return "wait for enter    (mod value)";

  const inverse = modInverse(a, m);
  return inverse;
}
