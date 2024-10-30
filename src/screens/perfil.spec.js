import React from 'react';
import { fireEvent, render, screen, getByTestId } from '@testing-library/react-native';
import TelaPerfil from './perfil';

describe('TelaPerfil', () => {
    describe('clicar em alterar senha', () => {
        it('mostra o modal de senha', () => {
            render(<TelaPerfil />);
            fireEvent.press(screen.getByText('Alterar senha'));
            expect(screen.getByTestId('modal-senha')).toHaveProp('visible', true);
        });
    });
    describe('clicar em alterar nome de usuário', () => {
        it('mostra o modal de nome de usuário', () => {
            render(<TelaPerfil />);
            fireEvent.press(screen.getByText('Alterar nome de usuário'));
            expect(screen.getByTestId('modal-nome-usuario')).toHaveProp('visible', true);
        });
    });
});