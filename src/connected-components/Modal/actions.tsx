import { store } from "../../redux/store";
import { ModalMessage } from "../../resources/interfaces/connected-components/modal";
import { hideModal, showModal } from "./reducer";

export const showGlobalModal = ({
  title,
  message,
  type,
  onConfirm,
  onReject,
}: ModalMessage) => {
  store.dispatch(showModal({ title, message, type, onConfirm, onReject }));
};

export const closeGlobalModal = () => {
  store.dispatch(hideModal());
};
