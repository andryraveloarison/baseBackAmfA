import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import All from './screens/All'
import Event from './screens/Event'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }}

const App = () => {
  const [loaded]=useFonts({
      InterBold: require("./assets/fonts/Inter-Bold.ttf"),
      InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
      InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
      InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
      InterLight: require("./assets/fonts/Inter-Light.ttf"),


  });
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions = {{ headerShown: false}}
      initialRouteName = "Event">
        <Stack.Screen name="All" component={All}/>
        <Stack.Screen name="Event" component={Event}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

