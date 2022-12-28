import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IRouteParamsList } from "../types";
import { Screens } from "../../constants/screens";
import StartScreen from "../../screens/StartScreen";

const RootStack = createNativeStackNavigator<IRouteParamsList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screens.start}>
      <RootStack.Screen
        name={Screens.start}
        options={{ headerShown: false }}
        component={StartScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
