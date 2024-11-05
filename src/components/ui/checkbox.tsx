import Button from "./button";
import { Check } from "lucide-react-native";
import Text from "./text";
import { View } from "react-native";
import { useState } from "react";

const CheckBox = ({ onChecked }) => {
	const [checked, setChecked] = useState<boolean>(false);

	return (
		<View className="flex-row items-center gap-2">
			<Button
				onPress={() => { setChecked(!checked); onChecked(!checked); }}
				className={`${checked && "bg-blue-500 border-blue-500"} border w-6 h-6 items-center justify-center rounded-md border-black/20`}
			>
				<Text className={!checked && "hidden"}>
					<Check size={20} color={"#fff"} />
				</Text>
			</Button>
			<Text>Motorista</Text>
		</View>
	);
};

export default CheckBox;
