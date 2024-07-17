import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, } from "react-native";
import { Divider } from "@rneui/themed";


import styles from "../theme/app-theme";
import AlbumsYearsComponent from "../Components/AlbumsYearsComponent";

const AlbumYearsScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.viewHeader}/>
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
            <AlbumsYearsComponent year={"2019"}/>   
            <AlbumsYearsComponent year={"2020"}/> 
            <AlbumsYearsComponent year={"2021"}/> 
            <AlbumsYearsComponent year={"2022"}/>      
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default AlbumYearsScreen;