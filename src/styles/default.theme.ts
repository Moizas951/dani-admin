export const defaultTheme = {
    colors: {
        primary: {
            light: 'hsl(205 ,74%, 65%)',
            main: 'hsl(205, 67%, 45%)',
            dark: 'hsl(205, 87%, 29%)'
        },
        secondary: {
            light: 'hsl(174, 96%, 78%)',
            main: 'hsl(180, 77%, 47%)',
            dark: 'hsl(186, 91%, 29%)'
        }
    },
    space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
    radii: {
        sm: 8,
        md: 16,
        lg: 32
    },
    fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px'
    },
    fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
};

export type Theme = typeof defaultTheme;

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme };

// 'primary' | 'secondary'
export type ColorType = keyof Theme['colors'];

// 3 possible shades of a ColorType
export type ColorIndex = 'light' | 'main' | 'dark';

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// 3 possible border radius
export type RadiiIndex = 'sm' | 'md' | 'lg';
