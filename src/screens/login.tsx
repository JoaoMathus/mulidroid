import { useState } from 'react';
import { Dimensions } from 'react-native';
import { VStack } from '../../components/ui/vstack';
import { FormControl, FormControlLabel, FormControlLabelText } from '../../components/ui/form-control';
import { Button, ButtonText } from '../../components/ui/button';
import { Input, InputField } from '../../components/ui/input';

/**
 *  Tela de Login.
 *
 *  IMPORTANTE: não usei Tailwind. Por algum motivo, ele não funciona.
 */
const TelaLogin = () => {
	const [valorUsuario, setValorUsuario] = useState("");
	const [valorSenha, setValorSenha] = useState("");
	return (
		<VStack style={{
			// Gambiarra até ser achada outra forma de ser feito.
			marginTop: Dimensions.get('window').width / 1.5,
			marginHorizontal: 10,
			paddingVertical: 15,
			paddingHorizontal: 10
		}}>
			<FormControl
				isInvalid={false}
				size="md"
				isDisabled={false}
				isReadOnly={false}
				isRequired={false}
			>
				<FormControlLabel>
					<FormControlLabelText>Usuário</FormControlLabelText>
				</FormControlLabel>
				<Input style={{marginBottom: 20}} size="xl">
					<InputField
						type="text"
						placeholder="usuário"
						value={valorUsuario}
						onChange={(e) => setValorUsuario(e.target.value)}
					/>
				</Input>
				<FormControlLabel>
					<FormControlLabelText>Senha</FormControlLabelText>
				</FormControlLabel>
				<Input style={{marginBottom: 20}} size="xl">
					<InputField
						type="password"
						placeholder="senha"
						value={valorSenha}
						onChange={(e) => setValorSenha(e.target.value)}
					/>
				</Input>
				<Button size="xl">
					<ButtonText>Login</ButtonText>
				</Button>
			</FormControl>
		</VStack>
	);
}

export default TelaLogin;