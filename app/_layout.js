import { Stack, useRouter } from "expo-router";

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