import { fireEvent, render, screen } from "@testing-library/react-native";
import VeiculoForm from "../screens/veiculo-form";

describe("VeiculoForm", () => {
    describe("clica em cadastrar com os campos vazios", () => {
        it("não mostra modal de confirmação", () => {
            render(<VeiculoForm />);

            fireEvent.press(screen.getByTestId("botao-cadastrar"));

            expect(screen.queryByTestId("modal-confirmcao")).toBeNull();
        });
    });
});