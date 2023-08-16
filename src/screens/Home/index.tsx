import React from "react";
import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import { showGlobalModal } from "../../connected-components/Modal/actions";
import GenericText from "../../components/GenericText";
import MainLayout from "../MainLayout";
const Home = () => {
  return (
    <MainLayout backHeader title={"Home"} headerBackground={"yelow"}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          showGlobalModal({
            title: "Items will be removed from your basket",
            message: "Items from the restaurant will be removed.",
            type: "question",
          });
        }}
      >
        <GenericText>Show PopUp</GenericText>
      </TouchableOpacity>
    </MainLayout>
  );
};
export default Home;
