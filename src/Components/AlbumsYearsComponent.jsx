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

const AlbumsYearsComponent = ({ year }) => {
  return (
    <View style={styles.imageConteinerYearGeneral}>
      <View style={styles.imagenConteinerYear}>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2023/09/gratisography-parrot-pirate-free-stock-photo-800x525.jpg" }}
        >
          <View style={styles.viewYear}>
            <Text style={styles.textYear}>{year}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default AlbumsYearsComponent;
