import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import ServicoForm from "../screens/servico-form";

/**
 * Basicamente o que falta é testar a conexão com o banco.
 */
describe("ServicoForm", () => {
	describe("clicar em cadastrar", () => {
		it("mostra modal de confirmação", () => {
			const screen = render(<ServicoForm />);

			fireEvent.press(screen.getByText("Cadastrar"));
			const modal = screen.getByTestId("modal-confirmacao");
			expect(modal).toHaveProp("visible", true);
		});
	});
	describe("clicar em data do serviço", () => {
		it("mostra modal de seleção da data", () => {
			const screen = render(<ServicoForm />);

			fireEvent.press(screen.getByTestId("botao-data"));
			expect(screen.getByTestId("modal-data")).toHaveProp("visible", true);
		});
	});
});
