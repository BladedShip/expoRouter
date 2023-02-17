import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
    const router = useRouter();
    return (<Stack screenOptions={{
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
                    router.push('/modal');
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
        <Stack.Screen name="modal" options={{
            presentation: 'modal',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'black',
        }}
        />
    </Stack>
    )
}