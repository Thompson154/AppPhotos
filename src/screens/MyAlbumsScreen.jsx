import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Button } from "react-native";
import { Divider } from "@rneui/themed";

import AlbumsComponent from "../Components/AlbumsComponent";
import styles from "../theme/app-theme";

const MyAlbumsScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.viewHeader}>
        <Text style={styles.textMemories}>My Albums</Text>
      </View>
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
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
            <AlbumsComponent
              NombreAlbum={"Presentation Slides"}
              NumeroDeFotosDelAlbum={21}
            />
            <AlbumsComponent
              NombreAlbum={"Presentation Slides"}
              NumeroDeFotosDelAlbum={21}
            />
          </View>
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default MyAlbumsScreen;
