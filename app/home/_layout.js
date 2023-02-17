import { Tabs, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default () => {
    const router = useRouter();
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: 'white',
                tabBarActiveTintColor: 'black',
            }}
        >
            <Tabs.Screen
                name="search"
                options={{
                    tabBarLabel: 'Tests',
                    headerRight: () => (
                        <AntDesign
                            onPress={() => router.push('/modal')}
                            name="search1"
                            size={24}
                            color="white"
                        />
                    ),
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="flag"
                            size={24}
                            color={color}
                        />
                    ),
                    title: 'Tests',
                }}
            />
            <Tabs.Screen
                name="feed"
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="notification"
                            size={24}
                            color={color}
                        />
                    ),
                    title: 'Feed',
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="inbox"
                            size={24}
                            color={color}
                        />
                    ),
                    title: 'Messages',
                    headerShown: false,
                }}
            />

        </Tabs>
    );
}

// options={{
//     headerRight: () => (
//       <AntDesign
//         onPress={() => router.push('/modal')}
//         name="search1"
//         size={24}
//         color="white"
//       />
//     )
//   }}