//importing actionTypes all together
import * as actionTypes from "../actions/actionsTypes";

//initializing the state
const initialState = {
  language: "en", //default selected language
  userInfo: null, //`null` as the initialized value
  pageTitle: "Scorp-Sample Case", //to be used for updating page title
};

//generating reducer based on state and actions
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
