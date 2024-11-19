import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GradeForm } from "./app/screens/GradeForm";
import { ListGrade } from "./app/screens/ListGrade";
export default function App() {
  const StackGrade = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackGrade.Navigator>
        <StackGrade.Screen name="ListGradeNav" component={ListGrade} />
        <StackGrade.Screen name="GradeFormNav" component={GradeForm} />
      </StackGrade.Navigator>
    </NavigationContainer>
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
