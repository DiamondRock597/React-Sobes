import { LOADING } from "../../actions/types";
import LoadingReducer from "../loadingReducer";
describe("Loading reducer", () => {
  test("loading true", () => {
    expect(LoadingReducer(false, { type: LOADING })).toEqual(true);
  });

  test("loading false", () => {
    expect(LoadingReducer(false, { type: undefined })).toEqual(false);
  });
});
