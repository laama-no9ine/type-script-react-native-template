import { DefaultTheme } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { fontTypes } from "../../utils/enums";
import { getByScreenSize } from "../../utils/responsive";
// import {RFValue} from "react-native-responsive-fontsize";
import { CustomTheme } from "../interfaces/theme/customTheme";
import { colors } from "./colors";

const SCREEN_HIGHT_REFERENCE = getByScreenSize(700, 900);
/* 
  This can be used to create different themes
  Like light and dark.
  It can be connected to React Context.
*/
const lightTheme: CustomTheme = {
  ...DefaultTheme,
  primary: colors.primary,
  secondary: colors.secondary,
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
  homeBackground: "#FFFFFF",
  fonts: {
    regular: fontTypes.regular,
    semiBold: fontTypes.semiBold,
    medium: fontTypes.medium,
    bold: fontTypes.bold,
  },
  modal: {
    containerBackground: "rgba(0,0,0,0.5)",
    modalBackground: "#FFFFFF",
    border: "#3C3C4361",
  },
  text: {
    textPrimary: colors.primary,
    black: "#000000",
    white: "#FFFFFF",
    s1: RFValue(8, SCREEN_HIGHT_REFERENCE),
    s2: RFValue(9, SCREEN_HIGHT_REFERENCE),
    s3: RFValue(10, SCREEN_HIGHT_REFERENCE),
    s4: RFValue(11, SCREEN_HIGHT_REFERENCE),
    s5: RFValue(12, SCREEN_HIGHT_REFERENCE),
    s6: RFValue(13, SCREEN_HIGHT_REFERENCE),
    s7: RFValue(14, SCREEN_HIGHT_REFERENCE),
    s8: RFValue(15, SCREEN_HIGHT_REFERENCE),
    s9: RFValue(16, SCREEN_HIGHT_REFERENCE),
    s10: RFValue(17, SCREEN_HIGHT_REFERENCE),
    s11: RFValue(18, SCREEN_HIGHT_REFERENCE),
    s12: RFValue(19, SCREEN_HIGHT_REFERENCE),
    s13: RFValue(20, SCREEN_HIGHT_REFERENCE),
    s14: RFValue(21, SCREEN_HIGHT_REFERENCE),
    s15: RFValue(22, SCREEN_HIGHT_REFERENCE),
    s16: RFValue(23, SCREEN_HIGHT_REFERENCE),
    s17: RFValue(24, SCREEN_HIGHT_REFERENCE),
    s18: RFValue(25, SCREEN_HIGHT_REFERENCE),
  },
  icon: {
    background: "#FFFFFF",
    icon: colors.black,
    label: colors.black,
  },
  header: {
    background: "transparent",
    title: "#000000",
  },
};

export default lightTheme;
