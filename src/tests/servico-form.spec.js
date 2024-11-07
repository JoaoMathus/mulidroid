import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import ServicoForm from "../screens/servico-form";

describe("ServicoForm", () => {
	describe("clicar em data do serviço", () => {
		it("mostra modal de seleção da data", () => {
			const screen = render(<ServicoForm />);

			fireEvent.press(screen.getByTestId("botao-data"));
			expect(screen.getByTestId("modal-data")).toHaveProp("visible", true);
		});
	});
});
