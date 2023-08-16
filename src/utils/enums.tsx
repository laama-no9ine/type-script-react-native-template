import { Platform } from "react-native";

export const modalTypes = {
  question: "question",
};
export const fontTypes = {
  bold: Platform.OS === "android" ? "Poppins-Bold" : "Poppins-Bold",
  semiBold: Platform.OS === "android" ? "Poppins-SemiBold" : "Poppins-SemiBold",
  medium: Platform.OS === "android" ? "Poppins-Medium" : "Poppins-Medium",
  regular: Platform.OS === "android" ? "Poppins-Regular" : "Poppins-Regular",
};
