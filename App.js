import { StyleSheet, Text, View } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/screens/Home'
import Search from './components/screens/Search'
import Activity from './components/screens/Activity'
import Reels from './components/screens/Reels'
import Profile from './components/screens/Profile'
import Status from './components/screenComponents/Status'
import FriendProfile from './components/screenComponents/FriendProfile';
import EditProfile from './components/screenComponents/EditProfile';


export default function App() {

  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => (
          {
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 50,
            },
            tabBarIcon: ({ focused, size, color }) => {
              let iconName
              if (route.name == 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
                size = focused ? size + 8 : size + 2
              } else if (route.name == 'Search') {
                iconName = focused ? 'search' : 'ios-search-outline';
                size = focused ? size + 8 : size + 2
              } else if (route.name == 'Reels') {
                iconName = focused ? 'caret-forward-circle' : 'caret-forward-circle-outline';
                size = focused ? size + 8 : size + 2
              } else if (route.name == 'Activity') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                size = focused ? size + 8 : size + 2
              } else if (route.name == 'Profile') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
                size = focused ? size + 8 : size + 2
              }
              return <Ionic name={iconName} size={size} color={color} />
            }
          }
        )}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Reels' component={Reels} />
        <Tab.Screen name='Activity' component={Activity} />
        <Tab.Screen name='Profile' component={Profile} />

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Bottom' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
