import { Text as RNText } from 'react-native';

const Text = ({children}) => {
  return (
    <RNText style={{fontFamily: "SofiaSans_600SemiBold"}}>{children}</RNText>
  )
}

export default Text