import { modalTypes } from "../../../utils/enums";
export interface ModalMessage {
  title: string;
  message: string;
  type: "question";
  onConfirm?: (() => void) | null;
  onReject?: (() => void) | null;
}
export interface ModalState {
  isVisible: boolean;
  messageObj: ModalMessage;
}
export interface ModalProps {
  modal: ModalState;
}
