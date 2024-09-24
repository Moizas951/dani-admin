import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles';
import { defaultTheme } from '../src/styles/default.theme';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: (props) => <img {...props} />
});

export const decorators = [
    (Story) => (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    )
];
