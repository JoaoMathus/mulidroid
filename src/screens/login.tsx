import React, { useState } from "react"
import { Image, View, Alert } from "react-native"
import Input from "../components/ui/input"
import Button from "../components/ui/button"
import Text from "../components/ui/text"

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <View className="w-full h-full justify-center gap-6">
      <View className="items-center">
        <Image
          className="w-52 h-52"
          source={require("../../assets/mulidroid_logo.png")}
          accessibilityLabel="A logo do aplicativo"
        />
      </View>
      <View className="gap-6">
        <View>
          <Input label="Usuário" onChangeText={setUsuario} value={usuario} />
        </View>
        <View>
          <Input secureTextEntry label="Senha" onChangeText={setSenha} value={senha} />
          <Text className="text-sm text-black/50 underline self-end mt-1">Esqueceu a senha ?</Text>
        </View>
      </View>
      <Button className="bg-blue-500 p-5 rounded-md">
        <Text className="text-center text-lg text-white" weight="semiBold">Login</Text>
      </Button>
    </View>
  )
}

export default Login