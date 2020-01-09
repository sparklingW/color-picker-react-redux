import React from "react";
import DropDown from "./drop-down";
import styled from "styled-components";

class ColorBlock extends React.Component {

  state = {
    isOpenDropDown: true,
    chosenColor: "rgb(255,0,0)",
  };

  handleOpen = () => {
    this.setState({
      isOpenDropDown: !this.state.isOpenDropDown
    })
  };

  choseColor = (color) => {
    const { setRgb } = this.props;
    this.setState({
      chosenColor: color
    }, () => setRgb(color));
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
