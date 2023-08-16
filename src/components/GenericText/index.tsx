import { useTheme } from "@react-navigation/native";
import { Text } from "react-native";
import { GenericTextProps } from "../../resources/interfaces/components/genericTextProps";
const GenericText = ({ style, children, ...props }: GenericTextProps) => {
  const theme = useTheme();
  if (!!style && style?.fontWeight) {
    return (
      <Text
        style={[
          {
            fontFamily:
              style.fontWeight === "700"
                ? theme.fonts.bold
                : style.fontWeight === "600"
                ? theme.fonts.semiBold
                : style.fontWeight === "500"
                ? theme.fonts.medium
                : theme.fonts.regular,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </Text>
    );
  } else {
    return (
      <Text style={[{ fontFamily: theme.fonts.regular }, style]} {...props}>
        {children}
      </Text>
    );
  }
};
export default GenericText;
