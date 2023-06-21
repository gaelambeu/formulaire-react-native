import { View, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FormLogin from "./screens/FormLogin";
import FormRegister from "./screens/FormRegister";
import Home from "./screens/Home";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FormLogin" component={FormLogin} />
        <Stack.Screen name="FormRegister" component={FormRegister} />
        
        <Stack.Screen name="Home" component={Home} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
