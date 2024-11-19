import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { getGrades } from "../services/GradeServices";
import { Avatar, FAB, ListItem } from "@rneui/base";
import { useState } from "react";
export const ListGrade = ({ navigation }) => {
  const [time, setTime] = useState();
  const refreshList = () => {
    setTime(new Date().getTime());
  };
  const ItemGrade = ({ indice, grades }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("GradeFormNav", {
            nota: grades,
            fnRefresh: refreshList,
          });
        }}
      >
        <ListItem bottomDivider>
          <Avatar
            title={grades.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: "#6733b9" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{grades.subject}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title>{grades.grade}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getGrades()}
        renderItem={({ index, item }) => {
          return <ItemGrade indice={index} grades={item} />;
        }}
        keyExtractor={(item) => item.subject}
        extraData={time}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("GradeFormNav", {
            nota: null,
            fnRefresh: refreshList,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
