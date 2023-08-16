/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalModal from "./connected-components/Modal";
import {
  Alert,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { navigationRef } from "./navigation";
import lightTheme from "./resources/theme/lightTheme";
import MainLayout from "./screens/MainLayout";
import { showGlobalModal } from "./connected-components/Modal/actions";
import Home from "./screens/Home";
const STYLES = ["default", "light-content", "dark-content"];
const TRANSLATIONS = ["fade", "slide", "none"];
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} theme={lightTheme}>
        <StatusBar
          animated={true}
          backgroundColor={"#FFFFFF"}
          // barStyle={STYLES[1]}
          // showHideTransition={TRANSLATIONS[0]}
          hidden={false}
        />
        <GlobalModal />
        <Home />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
