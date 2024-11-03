import React from "react"
import { View, ScrollView } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import CheckBox from "../components/ui/checkbox";

/**
 * 
 * Sugestão: quando tocar em cadastrar, aparecer uma modal de confirmação.
 */
const AjudanteForm = () => {
  return (
    <ScrollView className="w-full" contentContainerClassName="gap-5 p-8 mb-10">
      <Text className="text-left text-3xl" weight="black">Cadastro de Ajudante</Text>
      <Input label="Apelido"/>
      <Input label="Nome"/>
      <Input label="Telefone"/>
      <Input label="Data de Nascimento"/>
      <Input label="Usuário"/>
      <CheckBox/>
      <Button className="bg-blue-500 p-4 rounded-md mt-4">
        <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
      </Button>
    </ScrollView>
  )
}

export default AjudanteForm;