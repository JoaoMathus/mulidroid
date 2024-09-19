import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { FormControl } from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';

const CadastroVeiculo = () => {
  return (
    <GluestackUIProvider mode="light">
      <View>
        <FormControl className='p-4'>
          <VStack space='xl'>
            <Center>
              <Text className="text-typography-900 leading-1">Cadastro Veículo</Text>
            </Center>
            <VStack space='xs'>
              <Text className='text-typography-500 leading-1'>Placa</Text>
              <Input>
                <InputField type='text' />
              </Input>
            </VStack>
            <VStack>
              <Text className='text-typography-500 leading-1'>Veículo</Text>
              <Input>
                <InputField type='text' />
              </Input>
            </VStack>
            <Button className='px-6'>
              <ButtonText className='text-typography-0'>Cadastrar</ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </View>
    </GluestackUIProvider>
  )
}

export default CadastroVeiculo;