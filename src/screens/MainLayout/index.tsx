import { useTheme } from "@react-navigation/native";
import React from "react";
import { Animated, KeyboardAvoidingView, View, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Header from "../../components/Header";
import { MainLayoutProps } from "../../resources/interfaces/screens/mainLayoutProps";
import styles from "./styles";
const MainLayout = ({
  tabHeader = false,
  backHeader = false,
  enableOnAndroid = true,
  showVerticalScrollIndicator = false,
  noPadding = false,
  backgroundColor,
  enableScroll = false,
  onScroll,
  keyboardAvoidScrollView = false,
  children,
  headerRef,
  containerStyle,
  ...props
}: MainLayoutProps) => {
  const theme = useTheme();
  //render Content
  const renderContent = () => {
    return (
      <>
        {keyboardAvoidScrollView ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={48}
            style={{ flexGrow: 1, width: "100%" }}
          >
            <KeyboardAwareScrollView
              enableOnAndroid={enableOnAndroid}
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              {children}
            </KeyboardAwareScrollView>
          </KeyboardAvoidingView>
        ) : (
          <>{children}</>
        )}
      </>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.homeBackground,
        },
        containerStyle,
      ]}
    >
      {backHeader && <Header showBackIcon ref={headerRef} {...props} />}
      {enableScroll ? (
        <Animated.ScrollView
          showsVerticalScrollIndicator={showVerticalScrollIndicator}
          onScroll={onScroll}
          style={[styles.mainScrollView, noPadding && { paddingHorizontal: 0 }]}
        >
          {renderContent()}
        </Animated.ScrollView>
      ) : (
        <View style={[styles.mainView, noPadding && { paddingHorizontal: 0 }]}>
          {renderContent()}
        </View>
      )}
    </View>
  );
};
export default MainLayout;
