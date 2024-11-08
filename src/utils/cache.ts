import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

interface IStoredUser {
    username: string;
    password: string;
    employeeId: string;
    admin: boolean;
}

const expiraEm = 4320; /* minutos, vulgo 3 dias */
const userKey = "user";

/**
 * Armazena um objeto no cache local.
 */
const armazenar = async (chave: string, valor: object) => {
    const item = {
        valor,
        timeStamp: moment().valueOf(),
    };

    try {
        await AsyncStorage.setItem(chave, JSON.stringify(item));
        console.log(JSON.stringify(item));
    } catch (erro) {
        console.log(erro);
    }
};

const armazenarUser = async (user: IStoredUser) => {
    const itemToStore = {
        localUser: user,
        timeStamp: moment().valueOf()
    };

    console.log("ITEM A ARMAZENAR::" + itemToStore);

    try {
        await AsyncStorage.setItem(userKey, JSON.stringify(itemToStore));
    } catch (error) {
        console.log(error);
    }
}

/**
 * Verifica se expirou o tempo de armazenamento no cache.
 */
const estaExpirado = item => {
    const agora = moment(moment().valueOf());
    const tempoArmazenado = moment(item.timeStamp);
    return agora.diff(tempoArmazenado, "minutes") > expiraEm;
};

/**
 * Resgata o objeto do cache local.
 */
const resgatar = async chave => {
    try {
        const valor = await AsyncStorage.getItem(chave);
        const item = JSON.parse(valor);

        console.log("RESGATAR:::" + JSON.stringify(item));

        if (!item) return null;

        if (estaExpirado(item)) {
            await AsyncStorage.removeItem(chave);
            return null;
        }
        console.log(item.valor);

        return item.valor;
    } catch (erro) {
        console.log(erro);
    }
};

const resgatarUser = async () => {
    try {
        const storedItem = await AsyncStorage.getItem(userKey);
        const item = JSON.parse(storedItem);
        console.log("RESGATADO::" + JSON.stringify(item));

        if (!item) return null;

        if (estaExpirado(item)) {
            await AsyncStorage.removeItem(userKey);
            console.log("USER EXPIRADO");
            return null;
        }

        return item.localUser;
    } catch (error) {
        console.log(error);
    }
}

export default { armazenar, resgatar, armazenarUser, resgatarUser };