import { LOADING } from "../../actions/types";
import LoadingReducer from "../loadingReducer";
import { LoaderControl } from "../__mocks__/lodader";
describe("Loading reducer", () => {
  let loaderControl;
  beforeEach(() => {
    loaderControl = new LoaderControl();
  });

  test("loading true", () => {
    expect(LoadingReducer(false, loaderControl.onLoading())).toEqual(true);
  });

  test("loading false", () => {
    expect(LoadingReducer(false, { type: undefined })).toEqual(false);
  });
});
