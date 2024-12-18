import type React from "react";
import { TextInput, View } from "react-native";
import { fontVariants } from "../../utils/fontVariants";
import Text from "./text";

interface InputProps {
	label: string;
	secureTextEntry?: boolean;
	onChangeText?: React.Dispatch<React.SetStateAction<string>>;
	value?: string;
	testID?: string;
}

const Input = ({ label, secureTextEntry, onChangeText, value, testID }: InputProps) => {
	return (
		<View className="w-full relative">
			<Text className="mb-2" weight="medium">
				{label}
			</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
				value={value}
				textContentType="password"
				cursorColor={"#0077ff"}
				className="placeholder:text-black/20 rounded-md border border-black/10 w-full py-3 px-4 text-xl"
				style={{ fontFamily: fontVariants.light }}
				testID={testID}
			/>
		</View>
	);
};

export default Input;
