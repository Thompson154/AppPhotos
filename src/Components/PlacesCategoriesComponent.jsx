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

const PlacesCategoriesComponent = ({ placeOrCategorie }) => {
  return (
    <View style={styles.placeCategoriesContainerGeneral}>
      <View style={styles.viewPlaceCategoriesContainer}>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-sweet-kicks-800x525.jpg" }}
        ></ImageBackground>
      </View>
        <Text style={styles.textPlaceCategorie}>{placeOrCategorie}</Text>
    
    </View>
  );
};

export default PlacesCategoriesComponent;
