import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
let personas = [
  { nombre: "Jhon", apellido: "Morris", cedula: 1003418749 },
  { nombre: "Pedro", apellido: "Pascal", cedula: 1007651240 },
  { nombre: "Melany", apellido: "Mesa", cedula: 1005417681 },
];

let indiciSeleccionado = -1;

// Sí se crea una persona o se está moficando
let esNuevo = true;

export default function App() {
  const [txtCedula, setTxtCedula] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtApellido, setTxtApellido] = useState("");
  const [numElementos, setNumElementos] = useState(personas.length);

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  };

  const guardarPersona = () => {
    if (!txtNombre.trim() || !txtApellido.trim() || !txtCedula.trim()) {
      Alert.alert("ERROR", "Debe llenar todos los campos primero.");
      return;
    }

    let persona = {
      nombre: txtNombre,
      apellido: txtApellido,
      cedula: txtCedula,
    };
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Persona ya registrada con la cédula " + txtCedula);
      } else {
        personas.push(persona);
      }
    } else {
      personas[indiciSeleccionado].nombre = txtNombre;
      personas[indiciSeleccionado].apellido = txtApellido;
    }
    limpiar();
    setNumElementos(personas.length);
  };

  const limpiar = () => {
    setTxtNombre("");
    setTxtApellido("");
    setTxtCedula("");
    esNuevo = true;
  };

  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.areaIndice}>
          <Text>{props.indice + 1}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.persona.nombre} {props.persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" E "
            color="purple"
            onPress={() => {
              setTxtCedula(props.persona.cedula.toString());
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido);
              indiciSeleccionado = props.indice;
              esNuevo = false;
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              indiciSeleccionado = props.indice;
              personas.splice(indiciSeleccionado, 1);
              setNumElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.headerText}>PERSONAS</Text>
        <TextInput
          style={styles.txtStyle}
          value={txtCedula}
          placeholder="Ingrese su cédula"
          onChangeText={(txt) => {
            setTxtCedula(txt);
          }}
          keyboardType="numeric"
          editable={esNuevo}
        />
        <TextInput
          style={styles.txtStyle}
          value={txtNombre}
          placeholder="Ingrese su nombre"
          onChangeText={(txt) => {
            setTxtNombre(txt);
          }}
        />
        <TextInput
          style={styles.txtStyle}
          value={txtApellido}
          placeholder="Ingrese su apellido"
          onChangeText={(txt) => {
            setTxtApellido(txt);
          }}
        />
        <View style={styles.areaBotones}>
          <Button title="Guardar" onPress={guardarPersona} />
          <Button
            title="Nuevo"
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <View>
          <Text>Elementos: {numElementos}</Text>
        </View>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.list}
          data={personas}
          renderItem={(object) => {
            return <ItemPersona indice={object.index} persona={object.item} />;
          }}
          keyExtractor={(item) => item.cedula.toString()}
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.areaPie}>
        <Text style={styles.footerText}>Author: Anderson Muñoz</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#333",
  },
  list: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  itemPersona: {
    backgroundColor: "#E3F2FD",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BBDEFB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E88E5",
  },
  textoSecundario: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
  },
  areaCabecera: {
    backgroundColor: "#E8F5E9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  areaContenido: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 10,
    borderRadius: 10,
  },
  areaPie: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  areaIndice: {
    flex: 1,
    backgroundColor: "#64B5F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignSelf: "center",
    marginRight: 10,
  },
  itemContenido: {
    flex: 3,
    justifyContent: "center",
  },
  itemBotones: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    marginHorizontal: 20,
    gap: 5
  },
  txtStyle: {
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
});

