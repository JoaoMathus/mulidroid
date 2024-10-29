import React from 'react';
import { render, screen, getByLabelText } from '@testing-library/react-native';
import Login from './login';

describe('Login', () => {
    it('mostra a logo do projeto', () => {
        render(<Login />);
        expect(screen.getByLabelText('A logo do aplicativo')).toBeVisible();
    });
});