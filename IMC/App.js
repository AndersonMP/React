import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [estatura, setEstatura] = useState("");
  const [masa, setMasa] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = (estatura, masa) => {
    estatura = parseFloat(estatura);
    masa = parseFloat(masa);
    return masa / (estatura * estatura);
  };

  const estadoIMC = (resultadoIMC) => {
    if (resultadoIMC < 18.5) {
      return "Su peso es inferior al normal";
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25.0) {
      return "Su peso es normal";
    } else if (resultadoIMC >= 25.0 && resultadoIMC < 30.0) {
      return "Su peso es superior al normal";
    } else {
      return "Tiene obesidad";
    }
  };

  const ejecutarIMC = () => {
    const resultado = calcularIMC(estatura, masa);
    const estado = estadoIMC(resultado);
    setResultado(resultado.toFixed(2) + " - " + estado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <TextInput
        style={styles.caja}
        value={estatura}
        onChangeText={setEstatura}
        placeholder="Ingrese su Estatura (m)"
      />
      <TextInput
        style={styles.caja}
        value={masa}
        onChangeText={setMasa}
        placeholder="Ingrese su Masa (kg)"
      />
      <Button title="Calcular" onPress={ejecutarIMC} />
      <Text>Resultado: {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column", // Eje principal (Vertical)
    justifyContent: "center", // afecta al eje principal
    alignItems: "stretch", // afecta al eje secundario
    paddingHorizontal: 10,
  },
  caja: {
    borderBlockColor: "black",
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 3,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
    alignItems: "center",
  },
});
