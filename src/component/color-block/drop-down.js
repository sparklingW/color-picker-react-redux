import React from "react";
import styled from "styled-components";

const DropDown = ({colorsArray, choseColor, chosenColor}) => {
  return (
    <Container>
      {
        colorsArray.map(el => {
          return (
            <Element key={el.id} flag={chosenColor === el.color} onClick={() => choseColor(el.color)}>
              <Text>
                {el.name}
              </Text>
              <Block background={el.color} />
            </Element>
          )
        })
      }

    </Container>
  )
};

export default DropDown

const Container = styled.div`
  position: absolute;
  top: 66px;
  right: -1px;
  width: 180px;
  height: 225px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.02);
  color: grey;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Block = styled.div`
  width: 25px;
  height: 25px;
  margin: 15px 15px;
  background: ${props => props.background && `rgb(${props.background})`};
`;

const Element = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(128,128,128,0.36);
  background-color: ${props => props.flag ? "rgba(0,0,255,0.13)" : "white"};
   &:hover {
    background-color: rgba(0,0,255,0.13);
  }
`;

const Text = styled.div`
  margin: 15px 15px;
`;
