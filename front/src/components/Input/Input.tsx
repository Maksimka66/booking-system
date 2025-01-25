import { UseFormRegisterReturn } from 'react-hook-form';
import React, { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'email';
    placeholder: string;
    label: string;
    id: string;
    error?: string;
    register: UseFormRegisterReturn;
    containerStyle?: string;
    inputStyle?: string;
    labelStyle?: string;
}

export const Input = (props: InputProps) => {
    const {
        type,
        placeholder,
        label,
        error,
        register,
        id,
        containerStyle,
        inputStyle,
        labelStyle
    } = props;

    return (
        <div className={`${styles.inputContainer} ${containerStyle}`}>
            <label className={`${styles.inputLabel} ${labelStyle}`} htmlFor={id}>
                {label}
            </label>
            <input
                className={`${styles.inputField} ${inputStyle}`}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <span> {error} </span>}
        </div>
    );
};
