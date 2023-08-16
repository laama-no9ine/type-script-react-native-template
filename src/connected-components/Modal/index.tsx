import { useTheme } from "@react-navigation/native";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import GenericText from "../../components/GenericText";
import { RootState } from "../../redux/store";
import { ModalProps } from "../../resources/interfaces/connected-components/modal";
import { tr } from "../../resources/translations";
import { modalTypes } from "../../utils/enums";
import { closeGlobalModal } from "./actions";
import styles from "./styles";

const GlobalModal = ({ modal }: ModalProps) => {
  const { messageObj, isVisible } = modal;
  const { title, message, type, onConfirm, onReject } = messageObj;
  const theme = useTheme();
  const closeModal = (status: "reject" | "confirm" = "confirm") => {
    if (status === "confirm") {
      if (onConfirm) onConfirm();
      closeGlobalModal();
    } else {
      if (onReject) onReject();
      closeGlobalModal();
    }
  };
  const renderQuestionModal = () => {
    return (
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: theme.modal.modalBackground },
        ]}
      >
        <View style={styles.textContainer}>
          <GenericText
            style={[
              styles.title,
              {
                fontSize: theme.text.s10,
                fontWeight: "600",
                color: theme.text.black,
              },
            ]}
          >
            {title}
          </GenericText>
          <GenericText
            style={[
              styles.message,
              { fontSize: theme.text.s6, color: theme.text.black },
            ]}
          >
            {message}
          </GenericText>
        </View>
        <View
          style={[styles.buttonsContainer, { borderColor: theme.modal.border }]}
        >
          <TouchableOpacity
            onPress={() => closeModal("confirm")}
            style={[
              styles.button,
              { borderColor: theme.modal.border, borderRightWidth: 1 },
            ]}
          >
            <GenericText
              style={[
                styles.buttonTitle,
                { fontSize: theme.text.s10, color: theme.text.textPrimary },
              ]}
            >
              {tr("modal.cancel")}
            </GenericText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => closeModal("reject")}
            style={styles.button}
          >
            <GenericText
              style={[
                styles.buttonTitle,
                {
                  fontSize: theme.text.s10,
                  color: theme.text.textPrimary,
                  fontWeight: "600",
                },
              ]}
            >
              {tr("modal.confirm")}
            </GenericText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const getContentByType = () => {
    switch (type) {
      case modalTypes.question:
        return renderQuestionModal();
    }
  };
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View
        style={[
          styles.container,
          { backgroundColor: theme.modal.containerBackground },
        ]}
      >
        {getContentByType()}
      </View>
    </Modal>
  );
};

const mapStateToProps = (state: RootState) => ({
  modal: state.modal,
});
export default connect(mapStateToProps, null)(GlobalModal);
