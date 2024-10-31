import React, { useState } from 'react';
import { View, FlatList, Modal, Alert, ScrollView } from 'react-native';
import Text from "../components/ui/text";
import Button from "../components/ui/button"
import Input from "../components/ui/input";
import { Calendar } from "lucide-react-native";
import Divider from "../components/ui/divider";
import CardServico from "../components/card-servico";
import IServico from "../interfaces/IServico";

const dados: IServico[] = [
    {
        id: "1",
        address: "Ilha de Cinnabar",
        neighborhood: "Kalos",
        value: 350,
        date: "23/10/2024"
    },
    {
        id: "2",
        address: "Ilha dos Macacos",
        neighborhood: "Unova",
        value: 450,
        date: "21/10/2024"
    },
    {
        id: "3",
        address: "Ilha de Viridian",
        neighborhood: "Kanto",
        value: 550,
        date: "27/10/2024"
    }
];

const Item = ({ endereco, valor }) => (
    <View className="w-full p-3 gap-2 border rounded-md bg-slate-50">
        <Text className="text-xl" weight="bold">{endereco}</Text>
        <Text className="text-xl text-red-500" weight="bold">{valor}</Text>
    </View>
);

/**
 * 
 * FEITO: Ainda falta pôr rolagem na lista de serviços com pagamento pendente.
 * FAZER ALTERAÇÕES PARA QUE A LISTA DE SERVIÇOS NESTA TELA NÃO APAREÇA VALOR NEM
 * O NÚMERO DE AJUDANTES
 * 
 * Testes:
 * Quando banco estiver implementado:
 *  testar o resgate dos dados do usuário;
 *  testar a lista de serviços não pagos;
 *  testar a modificação de senha,
 *  testar a modificação de nome de usuário.
 */
const TelaPerfil = () => {
    const [mostrarModalSenha, setMostrarModalSenha] = useState(false);
    const [mostrarModalNomeUsuario, setMostrarModalNomeUsuario] = useState(false);

    return (
        <View className="w-full mt-5 p-8">
            <Text className="text-xl text-blue-500 text-right" weight="bold">Perfil</Text>
            <Text className="text-3xl" weight="black">Zé Carambola</Text>
            <Text className="text-lg">Alomomola da Silva Silveira</Text>
            <View className="flex-row items-center gap-1">
                <Calendar size={18} color={"#a1a1aa"} />
                <Text className="text-lg mt-[2px] text-zinc-400">22/04/1987</Text>
            </View>
            <Divider margin={6} />
            <View>
                <Text className="text-xl mb-2" weight="bold">SERVIÇOS NÃO PAGOS</Text>
                <View className="w-full max-h-[400px]">
                    <ScrollView>
                        {
                            dados.map(servico => <CardServico key={servico.id} servico={servico} />)
                        }
                    </ScrollView>
                </View>
            </View>
            <View className="w-full gap-3">
                <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => setMostrarModalSenha(true)}>
                    <Text className="text-lg text-center text-white" weight="semiBold">Alterar senha</Text>
                </Button>
                <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => setMostrarModalNomeUsuario(true)}>
                    <Text className="text-lg text-center text-white" weight="semiBold">Alterar nome de usuário</Text>
                </Button>
            </View>
            <Modal
                testID="modal-senha"
                animationType="slide"
                visible={mostrarModalSenha}
                onRequestClose={() => {
                    setMostrarModalSenha(!mostrarModalSenha);
                }}
            >
                <View className="h-full mx-6 justify-center gap-5">
                    <Input label="Nova senha" />
                    <View>
                        <Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setMostrarModalSenha(false)}>
                            <Text className="text-lg text-center text-white">Cancelar</Text>
                        </Button>
                        <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => {
                            Alert.alert("Senha salva!");
                            setMostrarModalSenha(false);
                        }}>
                            <Text className="text-lg text-center text-white">Salvar</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <Modal
                testID="modal-nome-usuario"
                animationType="slide"
                visible={mostrarModalNomeUsuario}
                onRequestClose={() => {
                    setMostrarModalSenha(!mostrarModalNomeUsuario);
                }}
            >
                <View className="h-full mx-6 justify-center gap-5">
                    <Input label="Mudar nome de usuário" />
                    <View>
                        <Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setMostrarModalNomeUsuario(false)}>
                            <Text className="text-lg text-center text-white">Cancelar</Text>
                        </Button>
                        <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => {
                            Alert.alert("Nome salvo!");
                            setMostrarModalNomeUsuario(false);
                        }}>
                            <Text className="text-lg text-center text-white">Salvar</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default TelaPerfil;