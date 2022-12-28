import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Screens } from "../constants/screens";

export type IRouteParamsList = {
  [Screens.start]: undefined;
};

export type NavigationType = NativeStackNavigationProp<IRouteParamsList>;
