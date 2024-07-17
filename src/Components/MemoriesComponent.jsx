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

const MemoriesComponent = ({ titleP1, titleP2, year }) => {
  return (
    <View style={styles.imageGeneralContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2023/10/gratisography-pumpkin-scarecrow-800x525.jpg" }}
        >
          <View style={styles.viewLogosGeneral}>
            <View style={styles.viewLogos}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => console.log("Pressed share button")}
              >
                <Icon1 size={45} color="white" name="share-apple" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => console.log("Pressed more button")}
              >
                <View style={styles.viewIconMore}>
                  <Icon2 size={25} color="white" name="more-horiz" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewTituloGeneral}>
            <Text style={styles.titleImage}>
              {titleP1}
              {"\n"}
              {titleP2}
            </Text>
            <Text style={styles.yearImage}>{year}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MemoriesComponent;
