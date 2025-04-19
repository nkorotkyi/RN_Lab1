import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import BottomTabs from "./navigation/BottomTabs"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
      <Text style={styles.footer}>Короткий М. О. - ЗІПЗ-21-1</Text>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
  },
})
