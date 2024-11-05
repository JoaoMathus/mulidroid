/**
 * Cache local.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefixo = "cache";
const expiraEm = 5; /* minutos */

/**
 * Armazena um objeto no cache local.
 */
const armazenar = async (chave: string, valor: object) => {
    const item = {
        valor,
        timeStamp: moment().valueOf(),
    };

    try {
        await AsyncStorage.setItem(prefixo + chave, JSON.stringify(item));
    } catch (erro) {
        console.log(erro);
    }
};

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
        const valor = await AsyncStorage.getItem(prefixo + chave);
        const item = JSON.parse(valor);

        if (!item) return null;

        if (estaExpirado(item)) {
            await AsyncStorage.removeItem(prefixo + chave);
            return null;
        }

        return item.valor;
    } catch (erro) {
        console.log(erro);
    }
};

export default { armazenar, resgatar };