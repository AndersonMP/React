import { View, Text, StyleSheet, Button } from "react-native";

export const Producto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>PRODUCTOS</Text>
      <Button
        title="HOME"
        onPress={() => {
          navigation.navigate("HomeNav");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
