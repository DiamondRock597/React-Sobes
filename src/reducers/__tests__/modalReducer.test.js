import ModalReducer from "../modalReducer";
import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/types";
import { ModalControl } from "../__mocks__/modal";

describe("Modal reducer", () => {
  let modalControl;

  beforeEach(() => {
    modalControl = new ModalControl();
  });

  test("Action undefined", () => {
    expect(ModalReducer({}, { type: undefined })).toEqual({});
  });

  test("Open modal", () => {
    expect(ModalReducer({}, modalControl.openModal())).toEqual({
      isOpen: true,
      itemModal: {},
    });
  });

  test("Close modal", () => {
    expect(ModalReducer({}, modalControl.closeModal())).toEqual({
      isOpen: false,
      itemModal: {},
    });
  });
});
