import { View } from "react-native"
import { Heading } from "../../components/ui/heading"
import { Input, InputField } from "../../components/ui/input";
import { VStack } from "../../components/ui/vstack";
import { Text } from "../../components/ui/text";

const CadastroAjudante = () => {
  return (
    <View className="h-screen items-start p-8 py-12">
      <Heading className="font-bold mb-12" size="2xl">
        Cadastro de Ajudante
      </Heading>
      <VStack className="w-full" space="2xl">
        <Input size="xl">
          <InputField placeholder="Apelido"/>
        </Input>
        <Input size="xl">
          <InputField placeholder="Nome"/>
        </Input>
        <Input size="xl">
          <InputField placeholder="Telefone"/>
        </Input>
        <Input size="xl">
          <InputField placeholder="Data de nascimento"/>
        </Input>
        <Input size="xl">
          <InputField placeholder="Usuário"/>
        </Input>
      </VStack>
      <Text>CASCO DA GAMAS</Text>
    </View>
  )
}

export default CadastroAjudante;