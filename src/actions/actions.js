//importing actionTypes all together
import * as actionTypes from "./actionsTypes";

//updating state.userInfo according user's provided data
export const updateUserInfo = (userInfo) => ({
  type: actionTypes.UPDATE_USER_INFO,
  payload: userInfo,
});

//updating state.language according to langSelector
export const updateLanguage = (languageCode) => ({
  type: actionTypes.UPDATE_LANGUAGE,
  payload: languageCode,
});

//updating state.pageTitle according to user's navigation in page
export const updatePageTitle = (title) => ({
  type: actionTypes.UPDATE_PAGE_TITLE,
  payload: title,
});
