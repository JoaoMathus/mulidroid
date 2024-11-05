import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Padrão singleton para conexão com o banco local e com o remoto.
 * 
 * TODO: adicionar conexão com o banco remoto.
 */
export default class GerenteDoBanco {
    private static instance: GerenteDoBanco;

    private constructor() {}

    public static getInstace(): GerenteDoBanco {
        if (!GerenteDoBanco.instance) {
            GerenteDoBanco.instance = new GerenteDoBanco();
        }

        return GerenteDoBanco.instance;
    }

    public async guardarItem(chave: string, valor: string): Promise<void> {
        try {
            await AsyncStorage.setItem(chave, valor);
        } catch (error) {}
    }

    public async pegarItem(chave: string): Promise<string> {
        let value = "";
        try {
            value = await AsyncStorage.getItem(chave);
            if (value != null) {
                return value;
            }
        } catch (error) {
            value = "Erro no banco de dados local";
        }
        return value;
    }

    public removerItem(chave: string) {
        try {
            AsyncStorage.removeItem(chave);
        } catch (error) {}
    }
}