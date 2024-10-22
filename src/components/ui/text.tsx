import { Text as RNText } from "react-native";
import { fontVariants } from "../../utils/fontVariants";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  weight?: string;
  className?: string;
}

const Text = ({ children, className, weight = "regular" }: TextProps) => {
  return (
    <RNText className={className} style={{ fontFamily: fontVariants[weight] }}>
      {children}
    </RNText>
  )
}

export default Text