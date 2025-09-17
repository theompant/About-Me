// lib/dynamic-color.ts
import tinycolor from "tinycolor2";
// Add this at the top, after imports
interface HslColor {
  h: number;
  s: number;
  l: number;
  a?: number;
}



export interface ThemeColors {
  primary: string;
  onPrimary: string;
  secondary: string;
  tertiary: string;
  surface: string;
  onSurface: string;
  outline: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
}

function ensureVibrant(c: tinycolor.Instance): tinycolor.Instance {
  const hsl: HslColor = c.toHsl();
  if (hsl.s < 0.3) {
    const boost = Math.min(100, Math.round((0.3 - hsl.s) * 100) + 10);
    return c.clone().saturate(boost);
  }
  return c;
}

export function seedDynamicTheme(seed: string): ThemeColors {
  const base = tinycolor(seed);
  const adjusted = ensureVibrant(base);

  const primary = adjusted.toHexString();
  const onPrimary = adjusted.isDark() ? "#ffffff" : "#000000";

  const secondary = adjusted.clone().spin(30).desaturate(10).toHexString();
  const tertiary = adjusted.clone().spin(-30).desaturate(5).toHexString();

  const surface = tinycolor.mix("#ffffff", adjusted, 4).toHexString();
  const surfaceContainer = tinycolor.mix(surface, adjusted, 8).toHexString();
  const surfaceContainerHigh = tinycolor.mix(surface, adjusted, 12).toHexString();

  const onSurface = tinycolor
    .mostReadable(surface, ["#0d0f12", "#e8eaf0"], { includeFallbackColors: true })
    .toHexString();

  const outline = tinycolor.mix(onSurface, primary, 50).desaturate(20).toHexString();

  return {
    primary,
    onPrimary,
    secondary,
    tertiary,
    surface,
    onSurface,
    outline,
    surfaceContainer,
    surfaceContainerHigh,
  };
}

/**
 * Apply seeded tokens.
 * - Always set chroma tokens (primary/secondary/tertiary/outline).
 * - Only set surface tokens in light mode so CSS [data-theme="dark"] can override surfaces.
 */
export function applyTheme(c: ThemeColors): void {
  const root = document.documentElement;
  const style = root.style;
  const isDark = root.getAttribute("data-theme") === "dark";

  // Chroma tokens (safe to set in both modes)
  style.setProperty("--m3-primary", c.primary);
  style.setProperty("--m3-on-primary", c.onPrimary);
  style.setProperty("--m3-secondary", c.secondary);
  style.setProperty("--m3-tertiary", c.tertiary);
  style.setProperty("--m3-outline", c.outline);

  if (isDark) {
    // Let CSS dark variables define surfaces; remove any stale inline values.
    style.removeProperty("--m3-surface");
    style.removeProperty("--m3-on-surface");
    style.removeProperty("--m3-surface-container");
    style.removeProperty("--m3-surface-container-high");
  } else {
    // Set surfaces only for light mode
    style.setProperty("--m3-surface", c.surface);
    style.setProperty("--m3-on-surface", c.onSurface);
    style.setProperty("--m3-surface-container", c.surfaceContainer);
    style.setProperty("--m3-surface-container-high", c.surfaceContainerHigh);
  }
}

/** Optional helper to force-clear inline surfaces (can be called on theme change) */
export function clearInlineSurfaces(): void {
  const s = document.documentElement.style;
  s.removeProperty("--m3-surface");
  s.removeProperty("--m3-on-surface");
  s.removeProperty("--m3-surface-container");
  s.removeProperty("--m3-surface-container-high");
}

export function getRandomMaterialColor(): string {
  const palette = [
    "#6750a4", "#7c4dff", "#2196f3", "#03dac6",
    "#4caf50", "#8bc34a", "#ff9800", "#ff5722",
    "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
  ];
  return palette[Math.floor(Math.random() * palette.length)];
}
