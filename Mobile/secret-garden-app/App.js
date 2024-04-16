const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Profile from "./Screens/Profile";
import Newsletter from "./Screens/Newsletter";
import Gallery from "./Screens/Gallery";
import Calendar from "./Screens/Calendar";
import Marks from "./Screens/Marks";
import ParentResources from "./Screeens/ParentResources";
import Inbox from "./Screeens/Inbox";
import LandingPage from "./Screeens/LandingPage";
import Navigation1 from "./Screeens/Navigation1";
import LoginPage from "./Screeens/LoginPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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
