import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams, Stack } from "expo-router";

const profile = () => {
    const router = useRouter();
    const { name, username } = useSearchParams();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Stack.Screen
        options={{
          title:name
        }}
      />
            <Text style={{ marginBottom: 20 }}>Hello {name} (@{username})</Text>
            <Button onPress={() => router.back()} title="Go Back"/>
        </View>
    );
}

export default profile;