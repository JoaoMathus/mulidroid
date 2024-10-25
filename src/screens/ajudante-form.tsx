import React from "react"
import { View } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const AjudanteForm = () => {
  return (
    <View className="w-full gap-5">
      <Text className="text-left text-3xl" weight="black">Cadastro de Ajudante</Text>
      <Input label="Apelido"/>
      <Input label="Nome"/>
      <Input label="Telefone"/>
      <Input label="Data de Nascimento"/>
      <Input label="Usuário"/>
      <Button className="bg-blue-500 p-4 rounded-md mt-4">
        <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
      </Button>
    </View>
  )
}

export default AjudanteForm;