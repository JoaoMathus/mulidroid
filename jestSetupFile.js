// Mock para o AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () =>
	require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
// Mock para o context de navegação
jest.mock("./src/hooks/useNavigation", () => () => ({
	navigator: {
		navigate: jest.fn(),
		dispatch: jest.fn()
	}
}));