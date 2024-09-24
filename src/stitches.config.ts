import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
    theme: {
        fonts: {
            system: 'system-ui'
        },
        colors: {
            cyanA1: '#059bcd',
            cyanA2: '#00c6d8',
            cyanA3: '#02c0d5',
            cyanA4: '#00b1c4',
            cyanA5: '#01a4ba',
            cyanA6: '#019cb4',
            cyanA7: '#0097b2',
            cyanA8: '#00a3c0',
            cyanA9: '#00a1c1',
            cyanA10: '#0090b0',
            cyanA11: '#00718d',
            cyanA12: '#002d38'
        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px'
        },
        radii: {
            sml: '32px'
        }
    }
});
