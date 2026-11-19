import { useCallback, useEffect, useState } from 'react';

export type ThemeMode =
  | 'paper'
  | 'nordic'
  | 'sage'
  | 'dark'
  | 'blueprint'
  | 'espresso';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  subtitle: string;
  isDark: boolean;
  canvasSwatch: string;
  surfaceSwatch: string;
  accentSwatch: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'paper',
    name: 'Archival Paper',
    subtitle: 'Warm cream parchment & ink',
    isDark: false,
    canvasSwatch: '#faf8f4',
    surfaceSwatch: '#ffffff',
    accentSwatch: '#b9382c',
  },
  {
    id: 'nordic',
    name: 'Nordic Studio',
    subtitle: 'Crisp glacier alabaster & slate',
    isDark: false,
    canvasSwatch: '#f3f6fa',
    surfaceSwatch: '#ffffff',
    accentSwatch: '#2563eb',
  },
  {
    id: 'sage',
    name: 'Botanical Field Note',
    subtitle: 'Soft celadon vellum & forest',
    isDark: false,
    canvasSwatch: '#f1f5f0',
    surfaceSwatch: '#fafcf9',
    accentSwatch: '#1b6b4c',
  },
  {
    id: 'dark',
    name: 'Obsidian Slate',
    subtitle: 'Deep charcoal & warm ivory',
    isDark: true,
    canvasSwatch: '#0e1116',
    surfaceSwatch: '#151a22',
    accentSwatch: '#eab04d',
  },
  {
    id: 'blueprint',
    name: 'Midnight Blueprint',
    subtitle: 'Prussian drafting navy & cyan',
    isDark: true,
    canvasSwatch: '#071324',
    surfaceSwatch: '#0c1d36',
    accentSwatch: '#58b9ff',
  },
  {
    id: 'espresso',
    name: 'Espresso Library',
    subtitle: 'Candlelit mahogany & gold',
    isDark: true,
    canvasSwatch: '#14100d',
    surfaceSwatch: '#1d1713',
    accentSwatch: '#eeb458',
  },
];

const STORAGE_KEY = 'reason-atlas-theme';

function isValidTheme(val: string | null): val is ThemeMode {
  return THEME_OPTIONS.some((t) => t.id === val);
}

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'paper';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light') return 'paper';
    if (isValidTheme(stored)) return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  } catch {
    // ignore storage errors
  }
  return 'paper';
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const option = THEME_OPTIONS.find((t) => t.id === theme) ?? THEME_OPTIONS[0];
    root.setAttribute('data-theme', option.id);
    if (option.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY, option.id);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const current = THEME_OPTIONS.find((t) => t.id === prev);
      return current?.isDark ? 'paper' : 'dark';
    });
  }, []);

  return { theme, setTheme, toggleTheme };
}
