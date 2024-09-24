import React from 'react';
import * as S from './styles';

export interface StyleProps {
    variant: 'outlined' | 'filled';
    size: 'small' | 'medium' | 'large';
    borderRadius: boolean;
}

interface ComponentProps extends StyleProps {
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ComponentProps> = ({
    onClick,
    variant,
    children,
    size,
    borderRadius
}) => {
    return (
        <S.Button
            onClick={onClick}
            variant={variant}
            size={size}
            borderRadius={borderRadius}
        >
            {children}
        </S.Button>
    );
};

export default Button;
