const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Profile from "./screens/Profile";
import Newsletter from "./screens/Newsletter";
import Gallery from "./screens/Gallery";
import Calendar from "./screens/Calendar";
import Marks from "./screens/Marks";
import ParentResources from "./screens/ParentResources";
import Inbox from "./screens/Inbox";
import LandingPage from "./screens/LandingPage";
import Navigation1 from "./screens/Navigation1";
import LoginPage from "./screens/LoginPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "LeagueSpartan-Medium": require("./assets/fonts/LeagueSpartan-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter"
              component={Newsletter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gallery"
              component={Gallery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Marks"
              component={Marks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ParentResources"
              component={ParentResources}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inbox"
              component={Inbox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Navigation1"
              component={Navigation1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
