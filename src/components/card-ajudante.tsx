import { DollarSign } from "lucide-react-native";
import { View } from "react-native";
import Text from "./ui/text";
import Button from "./ui/button";
import type { IAjudanteForList } from "../interfaces/IAjudante";

interface CardAjudanteProps {
	ajudante: IAjudanteForList;
	onPress?: () => void;
	onLongPress?: () => void;
}

const CardAjudante = ({ ajudante, onPress, onLongPress }: CardAjudanteProps) => {

	const diarias = ajudante.servicesCount * 90;

	return (
		<Button
			className="mb-2 border border-zinc-200/70 rounded-md flex-row justify-between items-center px-3 py-6"
			onPress={onPress}
			onLongPress={onLongPress}
		>
			<Text className="text-xl" weight="semiBold">
				{ajudante.name}
			</Text>
			<View className="flex-row items-center">
				<DollarSign size={20} color={"#f44336"} />
				<Text className="text-xl mt-px text-black/80" weight="regular">
					{Intl.NumberFormat("pt-BR", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					}).format(diarias)}
				</Text>
			</View>
		</Button>
	);
};

export default CardAjudante;
