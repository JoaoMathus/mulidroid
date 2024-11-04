import { Text as RNText } from "react-native";
import { fontVariants } from "../../utils/fontVariants";
import type React from "react";

interface TextProps {
	children: React.ReactNode;
	weight?: string;
	className?: string;
	lines?: number;
}

const Text = ({
	children,
	className,
	lines,
	weight = "regular",
}: TextProps) => {
	return (
		<RNText
			numberOfLines={lines}
			className={className}
			style={{ fontFamily: fontVariants[weight] }}
		>
			{children}
		</RNText>
	);
};

export default Text;
