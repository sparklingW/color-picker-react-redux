import * as consts from "../consts/index";

const initialState = {
  currentColor: "#FF00",
  currentRgb: "",
  colorsArray: [{
    id: 1,
    name: "RED",
    color: "rgb(255,0,0)"
  },{
    id: 2,
    name: "YELLOW",
    color: "rgb(255,255,0)"
  }, {
    id: 3,
    name: "GREEN",
    color: "rgb(0,255,0)"
  }, {
    id: 4,
    name: "RED",
    color: "rgb(0,0,255)"
  }]
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
    default:
      return {
        ...state,
      }
  }
};

export default mainReducer;
