import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from './components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { FormControl } from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui/select';

/**
 * Ponto de entrada da aplicação (suprimida por enquanto para testes).
 */
const App = () => {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </View></GluestackUIProvider>
  );
}

/**
 * Primeira versão da tela de cadastro de serviço.
 * v1.0
 * 
 * É o ponto de entrada da aplicação por enquanto
 * (ainda não implementamos navegação, portanto
 * essa escolha foi feita para facilitar a visualização da tela).
 */
const CadastroServico = () => {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
      <FormControl className='p-4'>
        <VStack space='xl'>
          <Text className='text-typography-900 leading-1 text-xl font-bold'>Cadastro de Serviço</Text>
          <VStack space='xs'>
            <Text className='text-typography-500 leading-1'>Endereço</Text>
            <Input>
              <InputField type='text' />
            </Input>
          </VStack>
          <VStack>
          <Text className='text-typography-500 leading-1'>Valor</Text>
          <Input>
            <InputField type='text' />
          </Input>
          </VStack>
          <VStack>
          <Text className='text-typography-500 leading-1'>Data</Text>
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
          <VStack>
            <Text className='text-typography-500 leading-1'>Selecionar Ajudantes</Text>
            <Select>
              <SelectTrigger variant='outline' size='md'>
                <SelectInput placeholder='Selecione' />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label='Negueba' value='Negueba' />
                  <SelectItem label='Alomomola' value='Alomomola' />
                  <SelectItem label='Garbodor' value='Garbodor' />
                </SelectContent>
              </SelectPortal>
            </Select>
          </VStack>
          <Button className='px-6'>
            <ButtonText className='text-typography-0'>Cadastrar</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </View></GluestackUIProvider>
  )
}

/**
 * Morrerá em detrimento do tailwind?
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Provisório. No futuro será App.
 */
export default CadastroServico;