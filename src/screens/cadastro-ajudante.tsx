import { TouchableOpacity, View } from "react-native"
import { Input, InputField } from "../../components/ui/input";
import { VStack } from "../../components/ui/vstack";
import { Text } from "react-native";
import Heading from "@/components/ui/heading/heading";
import { Button, ButtonText } from "@/components/ui/button";

const CadastroAjudante = () => {
  return (
    <View className="h-screen justify-center px-8">
      <VStack space="xl">
        <Heading className="text-3xl">
          Cadastro de Ajudante
        </Heading>
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
        <Button size="xl">
          <ButtonText className="mt-1">Cadastrar</ButtonText>
        </Button>
      </VStack>
    </View>
  )
}

export default CadastroAjudante;