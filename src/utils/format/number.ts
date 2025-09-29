const COMPACT_THRESHOLDS = [
  { value: 1_000_000_000, suffix: "B" },
  { value: 1_000_000, suffix: "M" },
];

const FALLBACK_VALUE = "—";

const removeTrailingZeros = (value: string): string => {
  return value.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
};

const isValidNumber = (value: unknown): value is number => {
  return typeof value === "number" && Number.isFinite(value);
};

export const formatCompact = (n: number): string => {
  if (!isValidNumber(n)) {
    return FALLBACK_VALUE;
  }

  for (const { value, suffix } of COMPACT_THRESHOLDS) {
    if (Math.abs(n) >= value) {
      const formatted = (n / value).toFixed(2);
      return `${removeTrailingZeros(formatted)}${suffix}`;
    }
  }

  return n.toLocaleString();
};

const clampPrecision = (value: number, digits: number): string => {
  return removeTrailingZeros(value.toFixed(digits));
};

const formatSignificant = (value: number, significant: number): string => {
  if (value === 0) {
    return "0";
  }

  const digits = significant - Math.floor(Math.log10(Math.abs(value))) - 1;
  const precision = Math.max(digits, 0);
  return removeTrailingZeros(value.toFixed(precision));
};

export const formatPrice = (n: number, stable?: boolean): string => {
  if (!isValidNumber(n)) {
    return FALLBACK_VALUE;
  }

  if (stable) {
    return n.toFixed(2);
  }

  const absValue = Math.abs(n);
  if (absValue >= 100) {
    return Math.round(n).toString();
  }

  if (absValue >= 1) {
    return clampPrecision(n, 2);
  }

  return formatSignificant(n, 3);
};

export const formatPct = (n: number): string => {
  if (!isValidNumber(n)) {
    return FALLBACK_VALUE;
  }

  return `${(n * 100).toFixed(3)}%`;
};
