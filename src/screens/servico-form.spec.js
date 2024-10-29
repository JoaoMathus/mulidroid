import React from 'react';
import { fireEvent, render, screen, getByTestId } from '@testing-library/react-native';
import ServicoForm from './servico-form';

describe('ServicoForm', () => {
    describe('clicar em cadastrar', () => {
        it('mostra modal de confirmação', () => {
            render(<ServicoForm />);

            fireEvent.press(screen.getByText('Cadastrar'));
            const modal = screen.getByTestId('modal-confirmacao');
            expect(modal).toHaveProp("visible", true);
        });
    });
    describe('clicar em configurar data', () => {
        it('mostra modal de seleção da data', () => {
            render(<ServicoForm />);

            fireEvent.press(screen.getByText('Configurar data'));
            const modal = screen.getByTestId('modal-date-time-picker');
            expect(modal).toHaveProp("visible", true);
        });
    });
});