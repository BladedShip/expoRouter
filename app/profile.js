import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";

const profile = () => {
    const router = useRouter();
    const params = useSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ marginBottom: 20 }}>Hello {params.name} {params.sur}</Text>
            <Button onPress={() => router.back()} title="Go Back" />
        </View>
    );
}

export default profile;