import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.container3}>
        <View style={styles.container4}></View>
        <View style={styles.container5}>
        <View style={styles.container6}></View>
        <View style={styles.container7}>
        <Button title= "Button 1"/>
          <Button title= "Button 2"/>
          <Button title= "Button 3"/>
        </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: "column"
  },
  container2: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container3:{
    flex: 3,
    backgroundColor: "lightgreen"
  },
  container4: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container5: {
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: "row",
  },
  container6: {
    flex: 1,
    backgroundColor: 'white'
  },
  container7: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  }
});
