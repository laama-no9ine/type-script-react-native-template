import { StyleSheet } from "react-native";
import { wdp } from "../../utils/responsive";

const styles = StyleSheet.create({
  center: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  ripple: {
    width: wdp(6),
    height: wdp(6),
    borderRadius: wdp(3),
  },
  label: {
    marginLeft: "5%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
export default styles;
