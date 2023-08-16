import { StyleProp } from "react-native";

export interface HeaderProps {
  noPaddingTop?: boolean;
  isModal?: boolean;
  headerBackground?: string;
  title?: string;
  titleColor?: string;
  titleStyle?: StyleProp<any> | StyleProp<any>[];
  showBackIcon?: boolean;
  backIconColor?: string;
  iconSize?: number;
  iconStyle?: StyleProp<any> | StyleProp<any>[];
  onBackIconPress?: () => void;
  headerStyle?: StyleProp<any> | StyleProp<any>[];
  ref?: React.Ref<any>;
}
