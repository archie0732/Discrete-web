function extendedGCD(a, b) {
  if (b === 0) {
    return [a, 1, 0];
  }
  const [gcd, x1, y1] = extendedGCD(b, a % b);
  const x = y1;
  const y = x1 - Math.floor(a / b) * y1;
  return [gcd, x, y];
}

function modInverse(a, m) {
  const [gcd, x] = extendedGCD(a, m);
  if (gcd !== 1) {
    throw new Error("模逆元素不存在");
  }
  return ((x % m) + m) % m;
}

const a = 3;
const m = 11;
try {
  const inverse = modInverse(a, m);
  console.log(`模逆元素是：${inverse}`);
} catch (error) {
  console.log(error.message);
}
