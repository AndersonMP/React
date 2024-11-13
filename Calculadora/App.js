import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("Valor 1");
  const [valor2, setValor2] = useState("Valor 2");
  const [resultado, setResultado] = useState("");

  const sumar = (valor1, valor2) => {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    return valor1 + valor2;
  };

  const restar = (valor1, valor2) => {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    return valor1 - valor2;
  };

  const multiplicar = (valor1, valor2) => {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    return valor1 * valor2;
  };

  const ejecutarOperacion = (operar) => {
    return operar(valor1, valor2);
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor1}
        onChangeText={(txt) => setValor1(txt)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.cajaTexto}
        value={valor2}
        onChangeText={(txt) => setValor2(txt)}
        keyboardType="numeric"
      />
      <Button
        title="Sumar"
        onPress={() => {
          const resultadoOperacion = ejecutarOperacion(sumar);
          setResultado(resultadoOperacion);
        }}
      />
      <Button
        title="Restar"
        onPress={() => {
          const resultadoOperacion = ejecutarOperacion(restar);
          setResultado(resultadoOperacion);
        }}
      />
      <Button
        title="Multiplicar"
        onPress={() => {
          const resultadoOperacion = ejecutarOperacion(multiplicar);
          setResultado(resultadoOperacion);
        }}
      />
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
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
