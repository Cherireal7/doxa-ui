// src/types/button.ts
import type { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    type?: ButtonType;
}
