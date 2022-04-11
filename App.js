import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';




export default function App() {

  let [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View >
      <Text style={{
        fontFamily: 'Lobster-Regular',
        fontSize: 70
      }}>
        Hello!
      </Text>
      <Ionic name='play' style={{
        fontSize: 20
      }} />
    </View>
  );
}

const styles = StyleSheet.create({

});
