import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Icon } from "@rneui/base";
import { TextInput } from "react-native";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <TextInput
        value={name}
        onChangeText={(txt) => setName(txt)}
        placeholder="Ingrese su nombre"
        lable="Nombre"
      />

      <Button
        title="OK"
        icon={{
          name: "youtube",
          type: "zocial",
          size: 20,
          color: "white",
        }}
        onPress={() => {
          Alert.alert("INFO", "Su nombre es " + name);
        }}
      />
      <Button
        title="Cancel"
        icon={{
          name: "github",
          type: "zocial",
          size: 20,
          color: "white",
        }}
      />
      <Icon name="spotify" type="zocial" color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
