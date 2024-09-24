import React from 'react';
import * as S from './styles';
import StyledProps from './styles';

interface ComponentsProps extends StyledProps {
    type: 'single' | 'multiple';
}

const SimpleAccordion: React.FC<ComponentsProps> = ({ type, ...rest }) => {
    return (
        <S.Root type={type} {...rest}>
            <S.Item value="item-1">
                <S.Header>
                    <S.Trigger {...rest}>
                        Ola
                        <S.Icon className="AccordionChevron" aria-hidden />
                    </S.Trigger>
                </S.Header>
                <S.Content>a</S.Content>
            </S.Item>
            <S.Item value="item-2">
                <S.Header>
                    <S.Trigger {...rest}>
                        Ola
                        <S.Icon className="AccordionChevron" aria-hidden />
                    </S.Trigger>
                </S.Header>
                <S.Content>a</S.Content>
            </S.Item>
            <S.Item value="item-3">
                <S.Header>
                    <S.Trigger {...rest}>
                        Ola
                        <S.Icon className="AccordionChevron" aria-hidden />
                    </S.Trigger>
                </S.Header>
                <S.Content>aso </S.Content>
            </S.Item>
        </S.Root>
    );
};

export default SimpleAccordion;
