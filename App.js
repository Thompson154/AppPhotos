import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ForYouScreen from "./src/screens/ForYouScreen";
import MemoriesForYouScreen from "./src/screens/MemoriesForYouScreen";
import AlbumScreen from "./src/screens/AlbumsScreen";
import MyAlbumsScreen from "./src/screens/MyAlbumsScreen";
import AlbumYearsScreen from "./src/screens/AlbumYearsScreen";
import AlbumMothYearsScreen from "./src/screens/AlbumMonthYearsScreen";
import SearchScreen from "./src/screens/SearchScreen";

import { Footer } from "./src/layout/Footer";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <ForYouScreen/> */}
      {/* <MemoriesForYouScreen/> */}
      {/* <AlbumScreen/> */}
      {/* <MyAlbumsScreen/> */}
      {/* <AlbumYearsScreen/> */}
      {/* <AlbumMothYearsScreen/> */}
      {/* <SearchScreen/> */}
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="tab" component={Footer} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
