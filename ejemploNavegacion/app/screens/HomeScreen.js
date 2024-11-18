import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="CONTACTOS"
          onPress={() => {
            navigation.navigate("ContactNav");
          }}
        />
        <Button
          title="PRODUCTOS"
          onPress={() => {
            navigation.navigate("ProductoNav");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 15
  },
});
