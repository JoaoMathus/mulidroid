import React from "react";
import { TextInput, View } from "react-native";
import { fontVariants } from "../../utils/fontVariants";
import Text from "./text";

interface InputProps {
  label: string;
  secureTextEntry?: boolean;
}

const Input = ({label, secureTextEntry}: InputProps) => {
  return (
    <View className="w-full relative">
      <Text className="mb-2" weight="medium">{label}</Text>
      <TextInput secureTextEntry={secureTextEntry} textContentType="password" cursorColor={"#0077ff"} className="placeholder:text-black/20 rounded-md border border-black/10 w-full py-4 px-4 text-xl" style={{ fontFamily: fontVariants["light"] }}/>
    </View>
  )
}

export default Input;