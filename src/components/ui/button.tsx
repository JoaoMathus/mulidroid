import React from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  testId?: string;
}

const Button = ({children, className, onPress, testId}: ButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} className={className} testID={testId} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  )
}

export default Button