import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Button } from "react-native";
import { Divider } from "@rneui/themed";

import HeaderComponent from "../Components/HeaderComponent";
import MemoriesComponent from "../Components/MemoriesComponent";
import FeaturedPhotosComponent from "../Components/FeaturedPhotosComponent";
import styles from "../theme/app-theme";

const ForYouScreen = () => {
  return (
    <View style={styles.containerMain}>
      {/* <View style={styles.viewHeader}></View> */}
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
          <HeaderComponent title={"For You"} subtitle={"Memories"} />
          <MemoriesComponent
            titleP1={`Year in`}
            titleP2={"Review"}
            year={2021}
          />
          <Divider style={styles.divider} />
          <Text style={styles.textSubtitle}>Featured Photos</Text>
          <ScrollView horizontal>
            <FeaturedPhotosComponent DeDonde={"La Paz"} Fecha={"6 Mar 2024"} />
            <FeaturedPhotosComponent DeDonde={"La Paz"} Fecha={"16 Feb 2024"} />
            <FeaturedPhotosComponent DeDonde={"La Paz"} Fecha={"12 Jul 2024"} />
          </ScrollView>
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default ForYouScreen;
