import { StyleSheet, Text, View } from "react-native";
import { Link, Stack, useRouter, Redirect } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Page() {
  const router = useRouter()

  return <Redirect
    href={'/home'}
  />
}

const styles = StyleSheet.create({
});
