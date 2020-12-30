import DataReducer from "../dataReducer";
import { GET_DATA } from "../../actions/types";

describe("Data reducer", () => {
  test("action undefined", () => {
    expect(DataReducer({}, { type: undefined })).toEqual({});
  });

  test("action GET_DATA", () => {
    expect(DataReducer({}, { type: GET_DATA, payload: {} })).toEqual({});
  });
});
