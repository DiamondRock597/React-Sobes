import ModalReducer from "../modalReducer";
import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/types";

describe("Modal reducer", () => {
  test("Action undefined", () => {
    expect(ModalReducer({}, { type: undefined })).toEqual({});
  });

  test("Open modal", () => {
    expect(ModalReducer({}, { type: OPEN_MODAL, payload: {} })).toEqual({
      isOpen: true,
      itemModal: {},
    });
  });

  test("Close modal", () => {
    expect(ModalReducer({}, { type: CLOSE_MODAL })).toEqual({
      isOpen: false,
      itemModal: {},
    });
  });
});
