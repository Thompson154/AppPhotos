import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import { Divider } from "@rneui/themed";
import Icon1 from "react-native-vector-icons/AntDesign";

import HeaderComponent from "../Components/HeaderComponent";
import AlbumsComponent from "../Components/AlbumsComponent";
import styles from "../theme/app-theme";

const AlbumScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.viewPlus}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log("Pressed plus button")}
        >
          <Icon1 size={35} color="blue" name="plus" />
        </TouchableOpacity>
      </View>
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
          <HeaderComponent title={"Albums"} subtitle={"My Albums"} />
          <ScrollView horizontal>
            <View>
              <View style={styles.viewDobleFila}>
                <AlbumsComponent
                  NombreAlbum={"Presentation Slides"}
                  NumeroDeFotosDelAlbum={21}
                />
                <AlbumsComponent
                  NombreAlbum={"Presentation Slides"}
                  NumeroDeFotosDelAlbum={21}
                />
                <AlbumsComponent
                  NombreAlbum={"Presentation Slides"}
                  NumeroDeFotosDelAlbum={21}
                />
                <AlbumsComponent
                  NombreAlbum={"Presentation Slides"}
                  NumeroDeFotosDelAlbum={21}
                />
              </View>
            </View>
          </ScrollView>
          <Divider style={styles.divider} />
          <Text style={styles.textSubtitle}>People & Places</Text>
          <ScrollView horizontal>
            <AlbumsComponent
              NombreAlbum={"Presentation Slides"}
              NumeroDeFotosDelAlbum={21}
            />
            <AlbumsComponent
              NombreAlbum={"Presentation Slides"}
              NumeroDeFotosDelAlbum={21}
            />
            
          </ScrollView>
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default AlbumScreen;
