import styled, { css } from 'styled-components';
import { theme } from '../../styles/index';
import createVariants from '../../utils/variantUtil';
import { StyleProps } from './index';

export const Button = styled.button<StyleProps>`
    background-color: ${theme.color('secondary', 'light')};
    ${({ variant, size, borderRadius }) =>
        createVariants(
            {
                variants: {
                    variant: {
                        filled: css`
                            color: ${theme.color('primary', 'main')};
                            background: ${theme.color('secondary', 'main')};
                            border: 1px solid
                                ${theme.color('secondary', 'main')};
                        `,
                        outlined: css`
                            color: ${theme.color('secondary', 'main')};
                            background: transparent;
                            border: 1px solid
                                ${theme.color('secondary', 'main')};
                        `
                    },
                    size: {
                        small: css`
                            width: 100px;
                        `,
                        medium: css`
                            width: 200px;
                        `,
                        large: css`
                            width: 300px;
                        `
                    },
                    borderRadius: {
                        true: css`
                            border-radius: ${theme.radii('sm')};
                        `
                    }
                },
                compoundVariants: [
                    {
                        variant: 'filled',
                        size: 'small',
                        css: css`
                            height: 100px;
                        `
                    }
                ]
            },
            { variant, size, borderRadius }
        )};
`;
