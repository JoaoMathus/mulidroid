import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Login from '../screens/login';

/**
 * Quando 'esqueceu a senha?' estiver implementado, testá-lo.
 * Quando estiver pronta a conexão com o banco, testá-la.
 */
describe('Login', () => {
    it('mostra a logo do projeto', () => {
        render(<Login />);
        expect(screen.getByLabelText('A logo do aplicativo')).toBeVisible();
    });
    describe('Botão login', () => {
        it(' existe?', () => {
            render(<Login />);
            expect(screen.getByText('Login')).toBeOnTheScreen();
        });
    });
});