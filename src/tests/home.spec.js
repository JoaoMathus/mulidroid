import { fireEvent, render, screen } from "@testing-library/react-native";
import TelaHome from "../screens/home";
import { ServicoAjudanteContext } from "../contexts/ServicoAjudanteContext";
import UserContext from "../hooks/userContext";

// Mock para servicos e ajudantes
const mockAjudantes = [
	{ id: "1", name: "Ajudante 1" },
	{ id: "2", name: "Ajudante 2" }
];
const mockServicos = [
	{ id: "1", serviceName: "Serviço 1", details: "Detalhes do serviço" },
	{ id: "2", serviceName: "Serviço 2", details: "Detalhes do serviço" },
];
const MockServicoAjudanteProvider = ({ children }) => {
	return (
		<ServicoAjudanteContext.Provider
			value={{
				ajudantes: mockAjudantes,
				setAjudantes: jest.fn(),
				servicos: mockServicos,
				setServicos: jest.fn(),
				buscarDados: jest.fn()
			}}
		>
			{children}
		</ServicoAjudanteContext.Provider>
	);
};

// Mock para contexto de usuário
const mockContextValue = {
    logado: true,
    setLogado: jest.fn(),
    adminAqui: true,
    setAdminAqui: jest.fn(),
    employeeId: "12345",
    setEmployeeId: jest.fn()
};

const MockUserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={mockContextValue}>
            {children}
        </UserContext.Provider>
    );
};

describe("TelaHome", () => {
    describe("clicar em serviços", () => {
        it("mostra lista de serviços", () => {
            render(
                <MockServicoAjudanteProvider>
                    <MockUserContextProvider>
                        <TelaHome />
                    </MockUserContextProvider>
                </MockServicoAjudanteProvider>
            );

            fireEvent.press(screen.getByTestId("botao-servicos"));
            expect(screen.getByTestId("lista-servicos")).toBeVisible();
        });
    });
    describe("clicar em ajudantes", () => {
        it("mostra lista de ajudantes", () => {
            render(
                <MockServicoAjudanteProvider>
                    <MockUserContextProvider>
                        <TelaHome />
                    </MockUserContextProvider>
                </MockServicoAjudanteProvider>
            );

            fireEvent.press(screen.getByTestId("botao-ajudantes"));
            expect(screen.getByTestId("lista-ajudantes")).toBeVisible();
        });
    });
});