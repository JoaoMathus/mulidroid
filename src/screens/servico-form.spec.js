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
});