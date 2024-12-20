import { View, StyleSheet, Alert } from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import { useState } from 'react'
import { createDocumentType, getDocumentTypes } from '../services/TestServices'


export const PostForm = () => {
    const [codigo, setCodigo] = useState();
    const [descripcion, setDescripcion] = useState();

    const createDocument = () => {
        console.log("creando post " + codigo + " " + descripcion);
        createDocumentType({
            code: codigo,
            description: descripcion
        },
            () => {
                Alert.alert('CONFIGURACIÓN', 'Se ha registrado un nuevo documento');
                setCodigo("");
                setDescripcion("");
            }
        );
    }
    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">REGISTRO DOCUMENTO</Text>
        </View>
        <View style={styles.formContainer}>
            <Input
                placeholder='CÓDIGO'
                value={codigo}
                onChangeText={(value) => {
                    setCodigo(value);
                }}
            />
            <Input
                placeholder='DESCRIPCIÓN'
                value={descripcion}
                onChangeText={(value) => {
                    setDescripcion(value);
                }}
            />
            <View style={styles.areaButton}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="GUARDAR DOCUMENTO"
                        onPress={createDocument}
                        buttonStyle={styles.buttonSave}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title="TIPOS DE DOCUMENTOS"
                        onPress={getDocumentTypes}
                        buttonStyle={styles.buttonTypeD}
                    />
                </View>
            </View>
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    formContainer: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    areaButton: {
        marginVertical: 10,
    },
    buttonWrapper: {
        marginVertical: 5,
    },
    buttonSave: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 25
    },
    buttonTypeD: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 25
    },
});

