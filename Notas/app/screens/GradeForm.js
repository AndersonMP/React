import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import {
  saveGrade,
  updateGrade,
  existeMateria,
} from "../services/GradeServices";
export const GradeForm = ({ navigation, route }) => {
  let isNew = true;
  let subjectR;
  let gradeR;
  if (route.params.nota != null) {
    isNew = false;
  }
  if (!isNew) {
    subjectR = route.params.nota.subject;
    gradeR = route.params.nota.grade;
  }
  const [subject, setSubject] = useState(subjectR || "");
  const [grade, setGrade] = useState(gradeR == null ? null : gradeR + "");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorGrade, setErrorGrade] = useState("");

  const save = () => {
    setErrorSubject(null);
    setErrorGrade(null);
    const hasErrors = validate();
    if (!hasErrors) {
      if (isNew) {
        if (existeMateria(subject)) {
          Alert.alert("INFO", "La materia " + subject + " ya está registrada.");
          return;
        } else {
          saveGrade({ subject, grade });
        }
      } else {
        updateGrade({ subject, grade: grade });
      }
      navigation.navigate("ListGradeNav");
      if (route.params.fnRefresh) {
        route.params.fnRefresh();
      }
    }
  };

  const validate = () => {
    let errors = false;
    if (subject == null || subject.trim() == "") {
      setErrorSubject("Debe ingresar una materia");
      errors = true;
    }
    const gradeFloat = parseFloat(grade);
    if (isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
      setErrorGrade("Debe ingresar una nota entre 0 y 10");
      errors = true;
    }

    return errors;
  };

  return (
    <View>
      <Input
        value={subject}
        onChangeText={setSubject}
        placeholder="Ejemplo: Matemáticas"
        label="Materia"
        errorMessage={errorSubject}
        disabled={!isNew}
      />
      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder="0-10"
        label="Materia"
        errorMessage={errorGrade}
      />
      <Button
        title="Guardar"
        icon={{
          name: "save",
          type: "entypo",
          size: 20,
          color: "white",
        }}
        buttonStyle={styles.saveButton}
        onPress={save}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "green",
  },
});
