import { GET_DATA } from "../../actions/types";
import UsersJSON from "../../api/__mocks__/houses.json";

export class CompanyHouse {
  getData = () => ({ type: GET_DATA, payload: UsersJSON });
}
