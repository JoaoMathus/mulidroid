import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import AjudanteForm from "../screens/ajudante-form";

describe("AjudanteForm", () => {
	describe("clicar em cadastrar sem preencher os campos", () => {
		it("não mostra modal de confirmação", () => {
			const screen = render(<AjudanteForm />);

			fireEvent.press(screen.getByTestId("botao-cadastrar"));

			expect(screen.queryByTestId("modal-confirmacao")).toBeNull();
		});
	});
	describe("clicar em data de aniversário", () => {
		it("mostra modal de seleção da data", () => {
			const screen = render(<AjudanteForm />);

			fireEvent.press(screen.getByTestId("botao-data"));
			expect(screen.getByTestId("modal-data")).toHaveProp("visible", true);
		});
	});
});
