import type React from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onPress?: () => void;
	onLongPress?: () => void;
	testId?: string;
}

const Button = ({
	children,
	className,
	onPress,
	onLongPress,
	testId,
}: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			onLongPress={onLongPress}
			className={className}
			testID={testId}
			activeOpacity={0.5}
		>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
