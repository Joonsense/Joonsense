/**
 * Temporary runtime validation script for number formatting helpers.
 * Not included in production build.
 *
 * Usage example (from project root):
 *   npx ts-node src/utils/format/number.test.ts
 */

import { formatCompact, formatPct, formatPrice } from "./number";

type TestCase = {
  label: string;
  expected: string;
  actual: string;
};

const tests: TestCase[] = [
  {
    label: "formatCompact(1_234_567)",
    expected: "1.23M",
    actual: formatCompact(1_234_567),
  },
  {
    label: "formatCompact(2_000_000_000)",
    expected: "2B",
    actual: formatCompact(2_000_000_000),
  },
  {
    label: "formatPrice(1.2345, true)",
    expected: "1.23",
    actual: formatPrice(1.2345, true),
  },
  {
    label: "formatPrice(123.45, false)",
    expected: "123",
    actual: formatPrice(123.45, false),
  },
  {
    label: "formatPrice(12.345, false)",
    expected: "12.35",
    actual: formatPrice(12.345, false),
  },
  {
    label: "formatPct(0.001234)",
    expected: "0.123%",
    actual: formatPct(0.001234),
  },
];

let hasFailure = false;

for (const { label, expected, actual } of tests) {
  if (actual !== expected) {
    hasFailure = true;
    console.error(`❌ ${label} => "${actual}" (expected "${expected}")`);
  } else {
    console.log(`✅ ${label} => "${actual}"`);
  }
}

if (hasFailure) {
  throw new Error("One or more number format checks failed. Inspect the logs above.");
}
