import React from "react";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

const Button = ({children, className, onPress}: ButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} className={className} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  )
}

export default Button