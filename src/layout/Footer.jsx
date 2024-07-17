import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome6';
const Tab = createBottomTabNavigator();

import AlbumScreen from '../screens/AlbumsScreen';
import ForYouScreen from '../screens/ForYouScreen';
import SearchScreen from '../screens/SearchScreen';
import AlbumMothYearsScreen from '../screens/AlbumMonthYearsScreen';

export const Footer = () => {
  return (
    <Tab.Navigator screenOptions={({route})=> ({
      tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#293133',
        borderTopColor: '#999',
      },
    })}
      >
      <Tab.Screen name="Library" component={AlbumMothYearsScreen}  options={{headerShown: true}}/>
      <Tab.Screen name="For You" component={ForYouScreen}  options={{headerShown: true}}/>
      <Tab.Screen name="Albums" component={AlbumScreen}  options={{headerShown: true}}/>
      <Tab.Screen name="Search" component={SearchScreen}  options={{headerShown: true}}/>
    </Tab.Navigator>
  );
};

function setIcon(route, routeStatus) {
  let iconName = "";
  if(route.name === "Library") {
    iconName = "book-open";
  }
  if(route.name === "For You") {
    iconName = "id-card";
  }
  if(route.name === "Albums") {
    iconName = "images";
  }
  if(route.name === "Search") {
    iconName = "magnifying-glass";
  }

  let color = 'gray';
  return <AwesomeIcon name={iconName} size={30} color={color} />;
}