import React from "react";
import DropDown from "./drop-down";
import styled from "styled-components";

class ColorBlock extends React.Component {

  state = {
    isOpenDropDown: false,
  };

  render() {
    const { isOpenDropDown } = this.state;
    const { colorsArray } = this.props;
    return(
      <Container>
        <Img
          src={`${process.env.PUBLIC_URL}/arrow-down.svg`}
          alt="arrow_down"
          width="42"
          height="42"
        />
        { isOpenDropDown && colorsArray.map(el => (
          <DropDown
            key={el.id}
            el={el}
          />
        ))}
      </Container>
    )
  }
}

export default ColorBlock;

const Container = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  cursor: pointer;
`;
