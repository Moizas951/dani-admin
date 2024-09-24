import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styled, { keyframes } from 'styled-components';

export default interface StyledProps {
    primary: 'small' | 'medium' | 'large';
}

export const Root = styled(Accordion.Root)<StyledProps>`
    border-radius: 6px;
    width: ${(props) => (props.primary === 'large' ? '300px' : '150px')};
    background-color: var(--mauve6);
    box-shadow: 0 2px 10px var(--blackA4);
`;

export const Item = styled(Accordion.Item)`
    overflow: hidden;
    margin-top: 1px;

    &:first-child {
        margin-top: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    &:focus-within {
        position: relative;
        z-index: 1;
        box-shadow: 0 0 0 2px var(--mauve12);
    }
`;

export const Header = styled(Accordion.Header)`
    display: flex;
`;

export const Trigger = styled(Accordion.Trigger)<StyledProps>`
    font-family: inherit;
    background-color: transparent;
    padding: 0 20px;
    height: ${(props) => (props.primary === 'large' ? '45px' : '25px')};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    line-height: 1;
    color: var(--violet11);
    box-shadow: 0 1px 0 var(--mauve6);
    background-color: white;

    &:hover {
        background-color: var(--mauve2);
    }

    &[data-state='open'] > Icon {
        transform: rotate(180deg);
    }
`;

const slideDown = keyframes`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  `;

const slideUp = keyframes`
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  `;

export const Content = styled(Accordion.Content)`
    overflow: hidden;
    font-size: 15px;
    color: var(--mauve11);
    background-color: var(--mauve2);
    &[data-state='open'] {
        animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }

    &[data-state='closed'] {
        animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`;

export const Icon = styled(ChevronDownIcon)`
    color: 'violet';
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
`;
