import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import styles from "../theme/app-theme";
import React from "react";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const PeopleComponent = ({ NombreAlbum, NumeroDeFotosDelAlbum }) => {
  return (
    <View>
      <View style={styles.peopleContainer}>
        <Image
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-800x525.jpg" }}
        ></Image>
      </View>
    </View>
  );
};

export default PeopleComponent;