import { useTheme } from "@react-navigation/native";
import { Platform, StatusBar, View } from "react-native";
import { HeaderProps } from "../../resources/interfaces/components/headerProps";
import GenericText from "../GenericText";
import Icon from "../Icon";
import styles from "./styles";

const Header = ({
  noPaddingTop = true,
  isModal = false,
  headerBackground,
  title,
  titleColor,
  titleStyle,
  showBackIcon,
  backIconColor,
  iconSize,
  iconStyle,
  onBackIconPress,
  headerStyle,
  ref,
}: HeaderProps) => {
  const theme = useTheme();
  const onBackPressed = () => {
    if (onBackIconPress) {
      onBackIconPress();
    }
  };
  return (
    <View style={{ overflow: "hidden", paddingBottom: 2 }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: headerBackground
              ? headerBackground
              : theme.header.background,
          },
          !noPaddingTop && {
            paddingTop:
              Platform.OS === "android"
                ? StatusBar.currentHeight
                : isModal
                ? 12
                : 50,
          },
          headerStyle,
        ]}
      >
        {showBackIcon && (
          <Icon
            name="chevron-left"
            type="Feather"
            color={backIconColor}
            size={iconSize}
            style={iconStyle}
            onPress={onBackPressed}
            role={"button"}
          />
        )}
        {title && (
          <GenericText
            style={[
              styles.title,
              {
                fontSize: theme.text.s10,
                color: titleColor ? titleColor : theme.header.title,
              },
              titleStyle,
            ]}
          >
            {title}
          </GenericText>
        )}
      </View>
    </View>
  );
};
export default Header;
