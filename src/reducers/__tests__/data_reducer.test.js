import DataReducer from "../dataReducer";
import { GET_DATA } from "../../actions/types";
import { CompanyHouse } from "../__mocks__/get_data";
import UsersJSON from "../../api/__mocks__/houses.json";

describe("Data reducer", () => {
  let companyHouse;

  beforeEach(() => {
    companyHouse = new CompanyHouse();
  });

  test("action undefined", () => {
    expect(DataReducer({}, { type: undefined })).toEqual({});
  });

  it("action GET_DATA", async () => {
    const action = await companyHouse.getData();
    expect(DataReducer({}, action)).toEqual(UsersJSON);
  });
});
