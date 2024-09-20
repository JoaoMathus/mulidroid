import { View } from "react-native"
import { Text } from "../text"
import React from "react"

interface HeadingProps {
  children: React.ReactNode,
  className: string;
}

const Heading = ({children, className}: HeadingProps) => {
  return (
      <Text className={className} style={{fontFamily: "Outfit_700Bold"}}>{children}</Text>
  )
}

export default Heading;