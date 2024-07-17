import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Button } from "react-native";
import { Divider } from "@rneui/themed";

import MemoriesComponent from "../Components/MemoriesComponent";
import styles from "../theme/app-theme";

const MemoriesForYouScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.viewHeader}>
        <Text style={styles.textMemories}>Memories</Text>
      </View>
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
            <MemoriesComponent titleP1={"Year in"} titleP2={"Review"} year={"2021"}/>
            <MemoriesComponent titleP1={""} titleP2={""} year={""}/>
            <MemoriesComponent titleP1={""} titleP2={""} year={""}/>
            <MemoriesComponent titleP1={""} titleP2={""} year={""}/>
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default MemoriesForYouScreen;
