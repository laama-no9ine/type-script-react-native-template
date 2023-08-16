import { StyleSheet } from "react-native";
import { getByScreenSize, hdp } from "../../utils/responsive";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: hdp(getByScreenSize(5, 6)),
    paddingHorizontal: "4%",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
  },
});
export default styles;
