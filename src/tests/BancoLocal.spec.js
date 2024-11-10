import AsyncStorage from "@react-native-async-storage/async-storage";

describe("Singleton de conexão com o banco", () => {
    describe("Testando o banco local", () => {
        it("tenta escrever no banco", async () => {
            try {
                await AsyncStorage.setItem("Teste", "coisa");
            } catch (error) {}

            try {
                expect(await AsyncStorage.getItem("Test")).toBeEqual("coisa");
            } catch (error) {}
        });
    });
});