import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.buttonContainer}>
          <Button title="X" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Y" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Z" />
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.container5}>
          <View style={styles.container7}>
            <Button title="BOTÓN 1" />
            <Button title="BOTÓN 2" />
          </View>
          <View style={styles.container8}>
            <View style={styles.buttonContainer2}>
              <Button title="OPERACIÓN 1" />
            </View>
            <View style={styles.buttonContainer2}>
              <Button title="OPERACIÓN 2" />
            </View>
            <View style={styles.buttonContainer2}>
              <Button title="OPERACIÓN 3" />
            </View>
          </View>
        </View>
        <View style={styles.container6}>
          <Button title="ACCIÓN 1"/>
          <Button title="ACCIÓN 2"/>
        </View>
      </View>
      <View style={styles.container4}>
        <Button title="BOTÓN FINAL"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // Por defecto flex direction Column
  },
  container2: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container3: {
    flex: 6,
    backgroundColor: "green",
  },
  container4: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container5: {
    flex: 4,
    backgroundColor: "magenta",
    flexDirection: "row",
  },
  container6: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-end",
  },  
  container7: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  container8: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  buttonContainer: {
    height: 40,
    width: 40,
  },
  buttonContainer2: {
    height: 40,
    width: 120,
  },
});
