import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./app/screens/HomeScreen";
import { Contact } from "./app/screens/ContactScreen";
import { Producto } from "./app/screens/ProductoScreen";
import { ContenidoA } from "./app/screens/ContenidoA";
import { ContenidoB } from "./app/screens/ContenidoB";
import { Icon } from "@rneui/base";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Componente para la navegación de Tab
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoANav"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: "Configuración",
          tabBarIcon: ({ size, color }) => (
            <Icon name="tool" type="antdesign" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabContenidoBNav"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: "Acerca de",
          tabBarIcon: ({ size, color }) => (
            <Icon name="infocirlceo" type="antdesign" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerProductosNav"
        component={TabNav}
        options={{
          title: "Productos",
        }}
      />
      <Drawer.Screen
        name="DrawerEjemplosNav"
        component={Producto}
        options={{
          title: "Ejemplos Tab",
        }}
      />
      <Drawer.Screen
        name="DrawerSesionNav"
        component={Home}
        options={{
          title: "Finalizar Sesión",
        }}
      />
    </Drawer.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeNav" component={Home} />
        <Stack.Screen name="ContactNav" component={Contact} />
        <Stack.Screen name="ProductoNav" component={Producto} />
      </Stack.Navigator>
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
