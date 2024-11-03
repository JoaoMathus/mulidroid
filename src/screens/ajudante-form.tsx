import React, { useState } from "react"
import { View, ScrollView, Modal, Alert } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import CheckBox from "../components/ui/checkbox";

/**
 * Falta colocar um modal para entrada de data de nascimento.
 */
const AjudanteForm = () => {
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  return (
    <ScrollView className="w-full" contentContainerClassName="gap-5 p-8 mb-10">
      <Text className="text-left text-3xl" weight="black">Cadastro de Ajudante</Text>
      <Input label="Apelido"/>
      <Input label="Nome"/>
      <Input label="Telefone"/>
      <Input label="Data de Nascimento"/>
      <Input label="Usuário"/>
      <CheckBox/>
      <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => setMostrarConfirmacao(true)}>
        <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
      </Button>
      <Modal
        testID="modal-confirmacao"
        animationType="fade"
        visible={mostrarConfirmacao}
        onRequestClose={() => {
            Alert.alert("Cancelado!");
            setMostrarConfirmacao(false);
        }}
      >
        <View className="mt-10 p-6 gap-5">
            <Text className="text-xl text-center" weight="extraBold">Tem certeza do que está fazendo?</Text>
            <Text className="text-xl" weight="extraBold">-- Dados entrados</Text>
            <View className="bg-slate-200 p-5 rounded-md">
                <Text className="text-xl" weight="bold">Apelido:</Text>
                <Text>Garbodor Vaidoso</Text>
                <Text className="text-xl" weight="bold">Nome:</Text>
                <Text>Garbodor da Silva Galalau</Text>
                <Text className="text-xl" weight="bold">Telefone:</Text>
                <Text>(+55) 21 90000-0000</Text>
                <Text className="text-xl" weight="bold">Data de nascimento:</Text>
                <Text>09/06/1977</Text>
                <Text className="text-xl" weight="bold">Usuário:</Text>
                <Text>Garbo-dor</Text>
                <Text className="text-xl" weight="bold">É motorista?</Text>
                <Text>Sim</Text>
            </View>
            <View className="gap-2">
                <Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setMostrarConfirmacao(!mostrarConfirmacao)}>
                    <Text className="text-xl text-center text-white">Cancelar</Text>
                </Button>
                <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => Alert.alert("Chama função que confirma a mudança no banco local")}>
                    <Text className="text-xl text-center text-white">Tenho absoluta certeza!</Text>
                </Button>
            </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default AjudanteForm;