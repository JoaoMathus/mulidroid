import React from "react";
import Text from "./text";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button = ({children, className}: ButtonProps) => {

  return (
    <TouchableOpacity className={className} activeOpacity={0.5}>
      {children}
    </TouchableOpacity>
  )
}

export default Button