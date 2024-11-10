import { View, Image } from "react-native";

const LogoMulidroid = () => {
	return (<View className="items-center">
		<Image
			className="w-52 h-52"
			source={require("../../assets/mulidroid_logo.png")}
			accessibilityLabel="A logo do aplicativo"
		/>
	</View>);
};

export default LogoMulidroid;