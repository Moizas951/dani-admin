import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
`;
