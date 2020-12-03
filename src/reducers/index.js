import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  language: "en",
  userInfo: null,
  pageTitle: "Scorp-Sample Case",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case actionTypes.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case actionTypes.UPDATE_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
