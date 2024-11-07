import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import AjudanteForm from "../screens/ajudante-form";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import { Modal } from "react-native";

describe("AjudanteForm", () => {
	describe("clicar em cadastrar", () => {
		it("mostra modal de confirmação", () => {
			const screen = render(<>
                {mostrarModal = false}
                <Button onPress={mostrarModal = true}>
                    <Text>Cadastrar</Text>
                </Button>
                <Modal
                    testID="modal-confirmacao"
                    visible={mostrarModal}
                    onRequestClose={() => mostrarModal = false}
                />
            </>);

			fireEvent.press(screen.getByText("Cadastrar"));
			const modal = screen.getByTestId("modal-confirmacao");
			expect(modal).toHaveProp("visible", true);
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
