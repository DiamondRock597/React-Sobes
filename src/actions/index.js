import { GET_DATA, CLOSE_MODAL, OPEN_MODAL, LOADING } from "./types";

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const getData = () => {
  return function (dispatch) {
    fetch("https://api.jqestate.ru/v1/properties/country")
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then((data) => {
        dispatch({ type: GET_DATA, payload: data });
        dispatch(loading());
      })
      .catch((e) => {
        dispatch(loading());
      });
  };
};

export const openModal = (item) => {
  return {
    type: OPEN_MODAL,
    payload: item,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
