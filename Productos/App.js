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
import { useEffect } from "react";

let productos = [
  {
    id: 100,
    nombre: "Doritos",
    categoria: "Snacks",
    precioCompra: 0.4,
    precioVenta: 0.45,
  },
  {
    id: 101,
    nombre: "Manicho",
    categoria: "Golosinas",
    precioCompra: 0.2,
    precioVenta: 0.25,
  },
  {
    id: 102,
    nombre: "Coca-Cola",
    categoria: "Bebidas",
    precioCompra: 0.8,
    precioVenta: 1.0,
  },
  {
    id: 103,
    nombre: "Chicles",
    categoria: "Golosinas",
    precioCompra: 0.1,
    precioVenta: 0.15,
  },
  {
    id: 104,
    nombre: "Pringles",
    categoria: "Snacks",
    precioCompra: 1.2,
    precioVenta: 1.5,
  },
  {
    id: 105,
    nombre: "Agua Mineral",
    categoria: "Bebidas",
    precioCompra: 0.5,
    precioVenta: 0.6,
  },
  {
    id: 106,
    nombre: "M&M's",
    categoria: "Golosinas",
    precioCompra: 0.9,
    precioVenta: 1.1,
  },
];

let indiciSeleccionado = -1;
let esNuevo = true;

export default function App() {
  const [txtID, setTxtID] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtCategoria, setTxtCategoria] = useState("");
  const [txtPreCom, setTxtPreCom] = useState("");
  const [txtPreVen, setTxtPreVen] = useState("");
  const [numElementos, setNumElementos] = useState(productos.length);

  useEffect(() => {
    if (txtPreCom) {
      setTxtPreVen((parseFloat(txtPreCom) * 1.2).toFixed(2)); 
    } else {
      setTxtPreVen("");
    }
  }, [txtPreCom]);

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtID) {
        return true;
      }
    }
    return false;
  };

  const guardarProducto = () => {
    if (
      !txtID.trim() ||
      !txtNombre.trim() ||
      !txtCategoria.trim() ||
      !txtPreCom.trim() ||
      !txtPreVen.trim()
    ) {
      Alert.alert("ERROR", "Debe llenar todos los campos primero.");
      return;
    }

    let producto = {
      id: parseInt(txtID),
      nombre: txtNombre,
      categoria: txtCategoria,
      precioCompra: parseFloat(txtPreCom),
      precioVenta: parseFloat(txtPreVen),
    };

    if (esNuevo) {
      if (existeProducto()) {
        Alert.alert(
          "INFO",
          "Producto con ID " + txtID + " ya está registrado."
        );
      } else {
        productos.push(producto);
      }
    } else {
      productos[indiciSeleccionado] = producto;
    }

    limpiar();
    setNumElementos(productos.length);
  };

  const limpiar = () => {
    setTxtID("");
    setTxtNombre("");
    setTxtCategoria("");
    setTxtPreCom("");
    setTxtPreVen("");
    esNuevo = true;
  };

  let ItemProducto = (props) => {
    return (
      <View style={styles.ItemProducto}>
        <View style={styles.areaIndice}>
          <Text>{props.indice + 1}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {props.producto.nombre} ${props.producto.precioVenta}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.producto.id} {props.producto.categoria} $
            {props.producto.precioCompra}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" E "
            color="purple"
            onPress={() => {
              setTxtID(props.producto.id.toString());
              setTxtNombre(props.producto.nombre);
              setTxtCategoria(props.producto.categoria);
              setTxtPreCom(props.producto.precioCompra.toString());
              setTxtPreVen(props.producto.precioVenta.toString());
              indiciSeleccionado = props.indice;
              esNuevo = false;
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              indiciSeleccionado = props.indice;
              productos.splice(props.indice, 1);
              setNumElementos(productos.length);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.headerText}>PRODUCTOS</Text>
        <TextInput
          style={styles.txtStyle}
          value={txtID}
          placeholder="Ingrese el ID"
          onChangeText={setTxtID}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.txtStyle}
          value={txtNombre}
          placeholder="Ingrese el nombre"
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txtStyle}
          value={txtCategoria}
          placeholder="Ingrese la categoría"
          onChangeText={setTxtCategoria}
        />
        <TextInput
          style={styles.txtStyle}
          value={txtPreCom}
          placeholder="Ingrese el precio de compra"
          onChangeText={setTxtPreCom}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.txtStyle}
          value={txtPreVen}
          placeholder="Precio de venta"
          onChangeText={setTxtPreVen}
          keyboardType="numeric"
          editable={false}
        />
        <View style={styles.areaBotones}>
          <Button title="Guardar" onPress={guardarProducto} />
          <Button title="Nuevo" onPress={limpiar} />
        </View>
        <View>
          <Text>Elementos: {numElementos}</Text>
        </View>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.list}
          data={productos}
          renderItem={(object) => {
            return (
              <ItemProducto indice={object.index} producto={object.item} />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.areaPie}>
        <Text style={styles.footerText}>Autor: Anderson Muñoz</Text>
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
    paddingVertical: 7,
  },
  ItemProducto: {
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
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  areaContenido: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 5,
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
    borderRadius: 40,
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
    gap: 5,
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