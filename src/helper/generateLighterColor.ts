/* eslint-disable prefer-const */
/**
 * Converts a HEX color to HSL.
 */
function hexToHSL(hex: string) {
  // Remove the leading # if present
  hex = hex.replace(/^#/, '');

  // Parse r, g, b values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max values for RGB
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) % 6;
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h *= 60;
  }

  return { h, s, l };
}

/**
 * Converts an HSL color back to HEX.
 */
function hslToHex(h: number, s: number, l: number) {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // Ensure 2 digits
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Generates a lighter version of a given HEX color.
 * @param color - The base HEX color (e.g., "#ff0000" or "red-500").
 * @param lightnessFactor - A value between 0 and 1 to control how much lighter.
 *                          (e.g., 0.2 increases lightness by 20%).
 */
export function generateLighterColor(
  color: string,
  lightnessFactor: number
): string {
  const hsl = hexToHSL(color);
  const newLightness = Math.min(1, hsl.l + lightnessFactor); // Cap lightness at 1
  return hslToHex(hsl.h, hsl.s, newLightness);
}

// Example usage:
const lighterRed = generateLighterColor('#ff0000', 0.2); // Lighter version of red
console.log(lighterRed); // e.g., "#ff6666"
