import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./scr/screens/HomeScreens";
import DetailsScreen from "./scr/screens/DetalisScreens";

const  Stack =createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detalhes" component={DetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}