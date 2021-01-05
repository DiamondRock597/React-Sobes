import { LOADING } from "../../actions/types";

export class LoaderControl {
  onLoading = () => ({ type: LOADING });
}
