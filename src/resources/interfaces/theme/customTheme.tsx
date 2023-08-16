import { Theme } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export interface CustomTheme extends Theme {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  homeBackground: string;
  fonts: {
    regular: string;
    semiBold: string;
    medium: string;
    bold: string;
  };
  modal: {
    containerBackground: string;
    modalBackground: string;
    border: string;
  };
  text: {
    textPrimary: string;
    black: string;
    white: string;
    s1: number;
    s2: number;
    s3: number;
    s4: number;
    s5: number;
    s6: number;
    s7: number;
    s8: number;
    s9: number;
    s10: number;
    s11: number;
    s12: number;
    s13: number;
    s14: number;
    s15: number;
    s16: number;
    s17: number;
    s18: number;
  };
  icon: {
    background: string;
    icon: string;
    label: string;
  };
  header: {
    background: string;
    title: string;
  };
}
