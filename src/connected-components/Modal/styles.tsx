import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 14,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    padding: "7%",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  title: {
    textAlign: "center",
    flexWrap: "wrap",
    lineHeight: 22,
    paddingBottom: "3%",
  },
  message: {
    textAlign: "center",
    flexWrap: "wrap",
    lineHeight: 16,
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1,
  },
  button: {
    width: "50%",
    padding: "4%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    lineHeight: 22,
  },
});
export default styles;
