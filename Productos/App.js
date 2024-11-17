import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  Modal,
  Pressable,
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

export default function App() {
  const [txtID, setTxtID] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtCategoria, setTxtCategoria] = useState("");
  const [txtPreCom, setTxtPreCom] = useState("");
  const [txtPreVen, setTxtPreVen] = useState("");
  const [numElementos, setNumElementos] = useState(productos.length);
  //El modal solo se muestra cuando tiene el valor de un índice
  // Es decir si es null no se mostrará
  // Si el indice del modal es igual al indice del producto seleccionado
  // Se muestra el modal
  const [modalVisible, setModalVisible] = useState(-1);
  const [indiciSeleccionado, setIndiciSeleccionado] = useState(-1);
  const [esNuevo, setEsNuevo] = useState(true);
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
  };

  function EditButton({ onPress }) {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="lightblue"
        onPress={onPress}
        style={{
          padding: 8,
          paddingHorizontal: 12,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "purple",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>E</Text>
      </TouchableHighlight>
    );
  }
  let ItemProducto = ({ indice, producto }) => {
    return (
      <View style={styles.ItemProducto}>
        <View style={styles.areaIndice}>
          <Text>{indice + 1}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {producto.nombre} ${producto.precioVenta}
          </Text>
          <Text style={styles.textoSecundario}>
            {producto.id} {producto.categoria} ${producto.precioCompra}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <EditButton
            onPress={() => {
              setTxtID(producto.id.toString());
              setTxtNombre(producto.nombre);
              setTxtCategoria(producto.categoria);
              setTxtPreCom(producto.precioCompra.toString());
              setTxtPreVen(producto.precioVenta.toString());
              setIndiciSeleccionado(indice);
              setEsNuevo(false);
            }}
          />
          <Button
            title=" X "
            color="red"
            onPress={() => {
              setIndiciSeleccionado(indice);
              setModalVisible(indice);
            }}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible == indice}
            onRequestClose={() => setModalVisible(null)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  ¿Está seguro de borrar el producto de la lista?
                </Text>
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(null)}
                  >
                    <Text style={styles.textStyle}>Cancelar</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonConfirm]}
                    onPress={() => {
                      productos.splice(indiciSeleccionado, 1);
                      setNumElementos(productos.length);
                      setModalVisible(null);
                      limpiar();
                    }}
                  >
                    <Text style={styles.textStyle}>Confirmar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
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
          renderItem={({ index, item }) => (
            <ItemProducto indice={index} producto={item} />
          )}
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
    textDecorationLine: "none",
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
  centeredView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
    width: 100,
  },
  buttonClose: {
    backgroundColor: "#FF4B5C", 
  },
  buttonConfirm: {
    backgroundColor: "#4CAF50", 
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
