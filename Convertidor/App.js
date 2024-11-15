import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [dolar, setDolar] = useState("0");
  const [resultado, setResultado] = useState("");
  const tasaCambioMXN = 20.62;
  const tasaCambioCOP = 4215;
  const tasaCambioEUR = 0.92;

  const usdToCOP = (dolar) => {
    dolar = parseFloat(dolar);
    return dolar * tasaCambioCOP;
  };

  const usdToMXN = (dolar) => {
    dolar = parseFloat(dolar);
    return dolar * tasaCambioMXN;
  };

  const usdToEUR = (dolar) => {
    dolar = parseFloat(dolar);
    return dolar * tasaCambioEUR;
  };

  const ejecutarConvertidor = (operar) => {
    const resultado = operar(dolar);
    return resultado.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text>Convertidor de Dólar a Peso Colombiano, Peso Mexicano, Euro</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={dolar}
        onChangeText={(txt) => {
          setDolar(txt);
        }}
        keyboardType="numeric"
      />
      <Button
        title="De USD a COP"
        onPress={() => {
          const resultadoConversion = ejecutarConvertidor(usdToCOP);
          setResultado(resultadoConversion + " COP");
        }}
      />
      <Button
        title="De USD a MXN"
        onPress={() => {
          const resultadoConversion = ejecutarConvertidor(usdToMXN);
          setResultado(resultadoConversion + " MXN");
        }}
      />
      <Button
        title="De USD a EUR"
        onPress={() => {
          const resultadoConversion = ejecutarConvertidor(usdToEUR);
          setResultado(resultadoConversion + " EUR");
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
