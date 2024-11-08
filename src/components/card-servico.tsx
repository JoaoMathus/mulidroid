import { View } from "react-native";
import Text from "./ui/text";
import { Calendar, DollarSign, User } from "lucide-react-native";
import type { IServico } from "../interfaces/IServico";
import Button from "./ui/button";
import { useContext } from "react";
import UserContext from "../hooks/userContext";

interface CardServicoProps {
	servico: IServico;
	onPress?: () => void;
	onLongPress?: () => void;
}

const CardServico = ({ servico, onPress, onLongPress }: CardServicoProps) => {

	const { adminAqui } = useContext(UserContext);

	return (
		<Button
			className="flex-row items-center justify-between rounded-md mb-4 p-3 border border-zinc-200/70"
			onPress={onPress}
			onLongPress={onLongPress}
		>
			<View>
				<Text className="" weight="bold">
					{servico.address}
				</Text>
				<Text className="text-zinc-600">{servico.neighborhood}</Text>
				<View className="flex-row items-center gap-1 mt-2">
					<Calendar size={15} color={"#a1a1aa"} />
					<Text className="mt-px text-zinc-400">{servico.serviceDate}</Text>
				</View>
			</View>
			<View className={`${adminAqui ? "flex-row" : "flex-row-reverse"} items-center justify-between w-[165px]`}>
				<View className="flex-row items-center self-end gap-px">
					<User size={22} color={"#9c9c9c"} />
					<Text className="text-lg mt-px">{servico.employeesCount}</Text>
				</View>
				<View className={`flex-row items-center gap-px ${!adminAqui && "hidden"}`}>
					<DollarSign size={20} color={"#0E9F6E"} />
					<Text className="text-lg mt-px">
						{Intl.NumberFormat("pt-BR", {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						}).format(servico.value)}
					</Text>
				</View>
			</View>
		</Button>
	);
};

export default CardServico;
