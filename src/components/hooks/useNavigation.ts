import { NavigationContext } from '@react-navigation/native';
import { useContext } from 'react';

const useNavigation = () => {
  const navigator = useContext(NavigationContext);

  return {
    navigator
  }
}

export default useNavigation;