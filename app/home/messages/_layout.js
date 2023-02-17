
import { Stack } from "expo-router";

export default () => {
    return <Stack >
        <Stack.Screen name="index" options={{
            title: "Messages",
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        }} />
        <Stack.Screen name="[id]" options={{
            title: "Message Room",
        }} />
    </Stack>
}