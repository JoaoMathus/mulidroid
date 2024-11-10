import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ComponenteParaTestarOTeste from './ComponenteParaTestarOTeste';

describe('ComponenteParaTestarOTeste', () => {
    it('renderiza a mensagem correta', () => {
        render(<ComponenteParaTestarOTeste />);
        expect(screen.getByText('Tem que dar certo!')).toBeVisible();
    });
});