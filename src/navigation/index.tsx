import React, { Ref } from "react";
import { NavigationProps } from "../resources/interfaces/navigation/navigationProps";

export const navigationRef: Ref<any> = React.createRef();

export default ({ name, params }: NavigationProps) => {
  if (navigationRef.current) {
    //Perfprm navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app has not mounted
    // You can ignore this, or add these actions to queue you can call later
  }
};
