import { StyleProp } from "react-native";
import { HeaderProps } from "../components/headerProps";
export interface MainLayoutProps extends HeaderProps {
  tabHeader?: boolean;
  backHeader?: boolean;
  enableOnAndroid?: boolean;
  showVerticalScrollIndicator?: boolean;
  onScroll?: () => void;
  noPadding?: boolean;
  backgroundColor?: string;
  enableScroll?: boolean;
  keyboardAvoidScrollView?: boolean;
  children?: any;
  headerRef?: React.Ref<any>;
  containerStyle?: StyleProp<any> | StyleProp<any>[];
}
