import React from 'react';
import './Button.scss';

export interface ButtonProps {
    backgroundColor?: string;
    label: string;
    onClick?: () => void;
}

export const Button = ({
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {

    return (
        <button
            type="button"
            className={`ui-button`}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

export const ButtonDefaults = {
    label: 'Button',
};

Button.defaultProps = ButtonDefaults;
