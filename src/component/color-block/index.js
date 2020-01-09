import React from "react";
import DropDown from "./drop-down";
import styled from "styled-components";
import * as conv from "../../convertsFunctions/index";

class ColorBlock extends React.Component {

  state = {
    isOpenDropDown: false,
    chosenColor: "255,0,0",
  };

  handleOpen = () => {
    this.setState({
      isOpenDropDown: !this.state.isOpenDropDown
    })
  };

  choseColor = (color) => {
    const { setRgb, setColor } = this.props;
    this.setState({
      chosenColor: color
    }, () => {
      setRgb(color);
      const splited = color.split(",");
      const res = conv.rgbToHex(Number(splited[0]), Number(splited[1]), Number(splited[2]));
      setColor(res);
    });
  };

  render() {
    const { isOpenDropDown, chosenColor } = this.state;
    const { colorsArray } = this.props;
    return(
      <Container>
        <Img
          src={`${process.env.PUBLIC_URL}/arrow-down.svg`}
          alt="arrow_down"
          width="42"
          height="42"
          onClick={this.handleOpen}
        />
        {isOpenDropDown &&
          <DropDown
            colorsArray={colorsArray}
            choseColor={this.choseColor}
            chosenColor={chosenColor}
          />
        }
      </Container>
    )
  }
}

export default ColorBlock;

const Container = styled.div`
  position: relative;
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  cursor: pointer;
`;
