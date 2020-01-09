import * as consts from "../consts/index";

export const setColor = (payload) => ({
  type: consts.PICK_COLOR,
  payload,
});

export const setRgb = (payload) => ({
  type: consts.PICK_RGB,
  payload,
});
