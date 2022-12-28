import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IRouteParamsList } from "../types";
import { Screens } from "../../constants/screens";
import StartScreen from "../../screens/StartScreen";
import HomeScreen from "../../screens/HomeScreen";
import AboutScreen from "../../screens/AboutScreen";

const RootStack = createNativeStackNavigator<IRouteParamsList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.start}>
      <RootStack.Screen
        name={Screens.start}
        options={{ headerShown: false }}
        component={StartScreen}
      />
      <RootStack.Screen
        name={Screens.about}
        options={{ title: "" }}
        component={AboutScreen}
      />
      <RootStack.Screen
        name={Screens.home}
        options={{ title: "" }}
        component={HomeScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
