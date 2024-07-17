import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Button, FlatList } from "react-native";
import { Divider } from "@rneui/themed";

import SearchBoxComponent from "../Components/SearchBoxComponent";
import PeopleComponent from "../Components/PeopleComponent";
import PlacesCategoriesComponent from "../Components/PlacesCategoriesComponent";
import styles from "../theme/app-theme";

const SearchScreen = () => {
  return (
    <View style={styles.containerMain}>
      {/* <View style={styles.viewHeader}></View> */}
      {/* <SafeAreaView style={styles.containerHeader}> */}
        <ScrollView>
          <Text style={styles.textTitle}>Search</Text>
          <SearchBoxComponent />
          <Text style={styles.textSubtitleSearch}>People</Text>
          <View style={styles.viewPeople}>
            <PeopleComponent />
            <PeopleComponent />
            <PeopleComponent />
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.textSubtitleSearch}>Places</Text>
          <ScrollView horizontal>
            <PlacesCategoriesComponent placeOrCategorie={"Home"} />
            <PlacesCategoriesComponent placeOrCategorie={"Rock Hill"} />
            <PlacesCategoriesComponent placeOrCategorie={"Sputhington"} />
            <PlacesCategoriesComponent placeOrCategorie={"Paris"} />
            <PlacesCategoriesComponent placeOrCategorie={"New York"} />
          </ScrollView>
          <Divider style={styles.divider} />
          <Text style={styles.textSubtitleSearch}>Categories</Text>
          <ScrollView horizontal>
            <PlacesCategoriesComponent placeOrCategorie={"Art"} />
            <PlacesCategoriesComponent placeOrCategorie={"Vehicles"} />
            <PlacesCategoriesComponent placeOrCategorie={"Babies"} />
            <PlacesCategoriesComponent placeOrCategorie={"Birds"} />
            <PlacesCategoriesComponent placeOrCategorie={"Dogs"} />
          </ScrollView>
        </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default SearchScreen;
