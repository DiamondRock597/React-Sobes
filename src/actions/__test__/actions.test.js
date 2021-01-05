import { loading, getData, openModal, closeModal } from "../index";
import { CLOSE_MODAL, LOADING, OPEN_MODAL } from "../types";

describe("Action tests", () => {
  it("loading", () => {
    expect(loading()).toEqual({ type: LOADING });
  });

  it("getData", () => {
    expect(getData()).toBeDefined();
    expect(getData()).toBeTruthy();
  });

  it("Open Modal", () => {
    expect(openModal({})).toEqual({ type: OPEN_MODAL, payload: {} });
  });

  it("Close Modal", () => {
    expect(closeModal()).toEqual({ type: CLOSE_MODAL, payload: undefined });
  });
});
