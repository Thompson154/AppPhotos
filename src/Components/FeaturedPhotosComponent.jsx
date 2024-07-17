import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Divider } from "@rneui/base";
import styles from "../theme/app-theme";
import React from "react";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const FeaturedPhotosComponent = ({ DeDonde, Fecha }) => {
  return (
    <View>
      <View style={styles.imagenConteinerFeatured}>
        <Image
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2023/10/gratisography-dracula-dentures-800x525.jpg" }}
        ></Image>
      </View>
      <Text style={styles.textDeDonde}>{DeDonde}</Text>
      <Text style={styles.textFecha}>{Fecha}</Text>
    </View>
  );
};

export default FeaturedPhotosComponent;
