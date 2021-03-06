import React from "react";
import RgbBlock from "../rgb-block/index";
import ColorBlock from "../color-block";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import styled from "styled-components";

const ColorPicker = ({currentColor, setRgb, currentRgb, colorsArray, setColor, setR_G_B}) => {
  return (
    <Wrapper>
      <Container>
        <Hex>
          {currentColor.toUpperCase()}
        </Hex>
        <RightSide>
          <ColorB>
            <RgbBlock
              background={currentRgb}
              setR_G_B={setR_G_B}
            />
          </ColorB>
          <OpenContext>
            <ColorBlock
              colorsArray={colorsArray}
              setRgb={setRgb}
              setColor={setColor}
              setR_G_B={setR_G_B}
            />
          </OpenContext>
        </RightSide>
      </Container>
    </Wrapper>
  )
};

const mapStateToProps = (state) => ({
  currentColor: state.currentColor,
  currentRgb: state.currentRgb,
  colorsArray: state.colorsArray,
  r: state.r,
  g: state.g,
  b: state.b,
});

const mapDispatchToProps = (dispatch) => ({
  setRgb: (payload) => dispatch(actions.setRgb(payload)),
  setColor: (payload) => dispatch(actions.setColor(payload)),
  setR_G_B:(payload) => dispatch(actions.setR_G_B(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

const Wrapper = styled.div`
  background-color: rgba(0,0,0,0.17);
  width: 500px;
  height: 400px;
  padding: 12px;
`;

const Container = styled.div`
  margin: 2% 10%;
  width: 300px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 3px 3px 3px 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
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
