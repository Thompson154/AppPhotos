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
import Icon1 from "react-native-vector-icons/MaterialIcons";

const AlbumsMothYearsComponent = ({ month, yearTitle, yearSubtitle }) => {
  return (
    <View style={styles.imageConteinerYearGeneral}>
      <View style={styles.textYearNextContainer}>
        <Text style={styles.textMonth}>{month}</Text>
        <Text style={styles.textMonthYear}>{yearTitle}</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log("Pressed next button")}
        >
          <Icon1 size={45} color="gray" name="navigate-next" />
        </TouchableOpacity>
      </View>
      <View style={styles.imagenConteinerYear}>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg" }}
        >
          <View style={styles.viewYear}>
            <Text style={styles.textYear}>{yearSubtitle}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default AlbumsMothYearsComponent;
