import React from 'react';
import './Button.scss';
import { prefix } from './../../scss/vars/export.scss';

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
            className={`${prefix}button`}
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
