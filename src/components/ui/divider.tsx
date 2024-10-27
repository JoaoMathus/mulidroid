import { View } from "react-native";

interface DividerProps {
  margin?: number;
  className: string;
}

const Divider = ({margin, className = "border-b border-zinc-200/70"}) => {
  return (
    <View
      className={className} style={{marginVertical: margin * 4}}>
    </View>
  )
}

export default Divider;