import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { Divider } from "@rneui/base";
import styles from "../theme/app-theme";
import React from "react";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const AlbumsComponent = ({ NombreAlbum, NumeroDeFotosDelAlbum }) => {
  return (
    <View>
      <View style={styles.imageAlbum}>
        <Image
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2023/10/gratisography-cool-cat-800x525.jpg" }}
        ></Image>
      </View>
      <Text style={styles.textDeDonde}>{NombreAlbum}</Text>
      <Text style={styles.textFecha}>{NumeroDeFotosDelAlbum}</Text>
    </View>
  );
};

export default AlbumsComponent;
