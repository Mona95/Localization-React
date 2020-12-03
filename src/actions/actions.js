import * as actionTypes from "./actionsTypes";

export const updateUserInfo = (userInfo) => ({
  type: actionTypes.UPDATE_USER_INFO,
  payload: userInfo,
});

export const updateLanguage = (languageCode) => ({
  type: actionTypes.UPDATE_LANGUAGE,
  payload: languageCode,
});

export const updatePageTitle = (title) => ({
  type: actionTypes.UPDATE_PAGE_TITLE,
  payload: title,
});
