import { GET_DATA } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
