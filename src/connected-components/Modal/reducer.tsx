import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ModalMessage,
  ModalState,
} from "../../resources/interfaces/connected-components/modal";

const initialState: ModalState = {
  isVisible: false,
  messageObj: {
    title: "",
    message: "",
    type: "question",
    onConfirm: null,
    onReject: null,
  },
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalMessage>) => {
      state.isVisible = true;
      state.messageObj.title = action.payload.title;
      state.messageObj.message = action.payload.message;
      state.messageObj.type = action.payload.type;
      state.messageObj.onConfirm = action.payload.onConfirm;
      state.messageObj.onReject = action.payload.onReject;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

//Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
