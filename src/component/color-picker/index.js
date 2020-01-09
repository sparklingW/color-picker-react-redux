import React from "react";
import RgbBlock from "../rgb-block/index";
import ColorBlock from "../color-block";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styled from "styled-components";

const ColorPicker = ({currentColor, setRgb, currentRgb, colorsArray}) => {

  React.useEffect(() => {
    let result = hexToRgb(currentColor);
    let resThirdEl = result[2] === undefined ? 0 : result[2];
    let rgb = result[0] + ',' + result[1] + ',' + resThirdEl;
    setRgb(`rgb(${rgb})`);
    console.log(rgbToHex(result[0], result[1], resThirdEl));
  });

  const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      ,(m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16));

  const rgbToHex = (r, g, b) => '#' + [r, g, b]
    .map(x => x.toString(16).padStart(2, '0')).join('');

  return (
    <Container>
      <Hex>
        {currentColor.toUpperCase()}
      </Hex>
      <RightSide>
        <ColorB>
          <RgbBlock background={currentRgb} />
        </ColorB>
        <OpenContext>
          <ColorBlock colorsArray={colorsArray} />
        </OpenContext>
      </RightSide>
    </Container>
  )
};

const mapStateToProps = (state) => ({
  currentColor: state.currentColor,
  currentRgb: state.currentRgb,
  colorsArray: state.colorsArray,
});

const mapDispatchToProps = (dispatch) => ({
  setRgb: (payload) => dispatch(actions.setRgb(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

const Container = styled.div`
  margin: 2% 10%;
  width: 300px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 3px 3px 3px 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Hex = styled.div`
  color: grey;
  font-size: 18px;
  margin: 0 0 0 10%;
`;

const RightSide = styled.div`
  display: flex;
`;

const ColorB = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(128,128,128,0.36);
`;

const OpenContext = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(128,128,128,0.36);
`;