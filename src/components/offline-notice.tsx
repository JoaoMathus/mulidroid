import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { View } from "react-native";
import Text from "./ui/text";

const OfflineNotice = () => {
    const netInfo = useNetInfo();

    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View className="align-center justify-center w-full h-full">
                <Text className="text-xl" weight="bold">Não está conectado à internet...</Text>
            </View>
        );
    
    return null;
};

export default OfflineNotice;