import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
    return <Stack screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <AntDesign
                onPress={() => {
                    alert('This works, lololol');
                }}
                name="search1"
                size={24}
                color="white"
            />
        )

    }}>
        <Stack.Screen
            name="index"
            options={{
                title: 'Home'
            }}
        />
    </Stack>
}