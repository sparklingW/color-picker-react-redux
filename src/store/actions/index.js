import * as consts from "../consts/index";

export const setColor = (payload) => ({
  type: consts.PICK_COLOR,
  payload,
});

export const setRgb = (payload) => ({
  type: consts.PICK_RGB,
  payload,
});

export const setR_G_B = (payload) => ({
  type: consts.SET_R_G_B,
  payload,
});

export const saveColor = (payload) => ({
  type: consts.SAVE_COLOR,
  payload,
});
