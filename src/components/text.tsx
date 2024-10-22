import { Text as RNText } from "react-native";
import { fontVariants } from "../utils/fontVariants";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  weight?: string;
}

const Text = ({ children, weight = "regular" }: TextProps) => {
  return (
    <RNText style={{ fontFamily: fontVariants[weight]}}>
      {children}
    </RNText>
  )
}

export default Text