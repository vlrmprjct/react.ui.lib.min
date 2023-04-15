import React, { ChangeEventHandler, FC } from 'react';
import './Input.scss';

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<InputProps> = ({ value, onChange }) => (
    <input type="text" value={value} onChange={onChange} />
);

export default Input;
