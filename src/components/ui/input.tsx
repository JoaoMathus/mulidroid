import React from "react";
import { TextInput, View } from "react-native";
import { fontVariants } from "../../utils/fontVariants";
import Text from "./text";

interface InputProps {
  label: string;
}

const Input = ({label}: InputProps) => {
  return (
    <View className="w-full">
      <Text className="mb-2" weight="medium">{label}</Text>
      <TextInput cursorColor={"#0077ff"} className="placeholder:text-black/20 rounded-md border border-black/10 bg-white w-full py-4 px-4 text-xl" style={{ fontFamily: fontVariants["light"] }}/>
    </View>
  )
}

export default Input;