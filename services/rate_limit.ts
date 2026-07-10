// Simple in-memory token-bucket rate limiter. Client-side placeholder.

type Bucket = { tokens: number; last: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  capacity = 5,
  refillPerSec = 1,
): boolean {
  const now = Date.now();
  const b = buckets.get(key) ?? { tokens: capacity, last: now };
  const elapsed = (now - b.last) / 1000;
  b.tokens = Math.min(capacity, b.tokens + elapsed * refillPerSec);
  b.last = now;
  if (b.tokens < 1) {
    buckets.set(key, b);
    return false;
  }
  b.tokens -= 1;
  buckets.set(key, b);
  return true;
}
