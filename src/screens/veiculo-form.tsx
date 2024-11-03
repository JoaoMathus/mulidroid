import React from "react"
import { View } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

/**
 * 
 * Sugestão: quando tocar em cadastrar, aparecer uma modal de confirmação.
 */
const VeiculoForm = () => {
  return (
    <View className="w-full gap-5 p-8">
      <Text className="text-left text-2xl" weight="black">Cadastro de Veículos</Text>
      <Input label="Placa"/>
      <Input label="Modelo"/>
      <Button className="bg-blue-500 p-4 rounded-md mt-4">
        <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
      </Button>
    </View>
  )
}

export default VeiculoForm;