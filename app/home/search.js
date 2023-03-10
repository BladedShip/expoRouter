import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack, Link, useRouter } from 'expo-router';

const search = () => {
  const router = useRouter()
  const users = [
    {
      name: "Adithyan",
      sur: "Jayakumar",
      username: "BladedShip",
    },
    {
      name: "Dhanalekshmi",
      sur: "MN",
      username: "DhanalekshmiMN",
    },
    {
      name: "Mayank",
      sur: "DJ",
      username: "MDJ",
    }
  ]
  return (
    <View style={styles.container}>
{/* 
      <Stack.Screen
        options={{
          headerRight: () => (
            <AntDesign
              onPress={() => router.push('/modal')}
              name="search1"
              size={24}
              color="white"
            />
          )
        }}
      /> */}

      <View style={styles.main}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Expo Router Tests</Text>

        <Text>Basic Routing</Text>

        <Link href="/profile?name=Adithyan&sur=Jayakumar" style={styles.link}>Adithyan - Data as URL</Link>

        <Link href={{
          pathname: "/profile",
          params: { name: 'Dhanalekshmi', sur: 'MN' }
        }} style={styles.link}>Dhanalekshmi - Data as Object</Link>

        <Link href={{
          pathname: "/MayankDJ",
          params: { name: 'Mayank', sur: 'DJ' }
        }} style={styles.link}>Mayank - Dynamic URLs</Link>

        <Text>Mapping Data</Text>
        {users.map((user) =>
        (
          <Link
            key={user.username}
            href={{
              pathname: `/${user.username}`,
              params: { name: user.name, sur: user.sur }
            }} style={styles.link}>
            Open {user.name}'s Profile
          </Link>
        ))
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    // textDecorationStyle:"underline",
    // textDecorationColor:"#000",
  }
});
export default search;