import * as consts from "../consts/index";

const initialState = {
  currentColor: "#FF00",
  currentRgb: "255,0,0",
  colorsArray: [{
    id: 1,
    name: "RED",
    color: "255,0,0"
  },{
    id: 2,
    name: "YELLOW",
    color: "255,255,0"
  }, {
    id: 3,
    name: "GREEN",
    color: "0,255,0"
  }, {
    id: 4,
    name: "BLUE",
    color: "0,0,255"
  }],
  r: '255',
  g: '0',
  b: '0',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.PICK_COLOR:
      return {
        ...state,
        currentColor: action.payload,
      };
    case consts.PICK_RGB:
      return {
        ...state,
        currentRgb: action.payload,
      };
    case consts.SET_R_G_B:
      return {
        ...state,
        r: action.payload.r,
        g: action.payload.g,
        b: action.payload.b,
      };
    default:
      return {
        ...state,
      }
  }
};

export default mainReducer;
