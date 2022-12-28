import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "../constants/screens";

export type IRouteParamsList = {
  [Screens.start]: undefined;
  [Screens.home]: undefined;
  [Screens.about]: undefined;
};

export type NavigationType = NativeStackNavigationProp<IRouteParamsList>;
