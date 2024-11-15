import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Componente 1" />
      <Button title="Componente 2" color="green" />
      <Button title="Componenete 3" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-around", // eje principal
    alignItems: "stretch", // eje secundario
  },
});
