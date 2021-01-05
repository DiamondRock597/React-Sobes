import { CLOSE_MODAL, OPEN_MODAL } from "../../actions/types";

export class ModalControl {
  openModal = () => ({ type: OPEN_MODAL, payload: {} });

  closeModal = () => ({ type: CLOSE_MODAL });
}
