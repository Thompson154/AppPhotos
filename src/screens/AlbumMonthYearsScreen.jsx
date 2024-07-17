import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, } from "react-native";
import { Divider } from "@rneui/themed";


import styles from "../theme/app-theme";
import AlbumsMothYearsComponent from "../Components/AlbumsMothYearsComponent";

const AlbumMothYearsScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View />
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
            <AlbumsMothYearsComponent month={"November"} yearTitle={2019} yearSubtitle={2019}/> 
            <AlbumsMothYearsComponent month={"December"} yearTitle={2020} yearSubtitle={2020}/>   
            <AlbumsMothYearsComponent month={"January"} yearTitle={2021} yearSubtitle={2021}/>   
            <AlbumsMothYearsComponent month={"February"} yearTitle={2021} yearSubtitle={2021}/>     
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default AlbumMothYearsScreen;