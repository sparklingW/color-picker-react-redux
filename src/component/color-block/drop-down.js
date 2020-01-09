import React from "react";
import styled from "styled-components";

const DropDown = ({colorsArray}) => {
  return (
    <Container>
      {
        colorsArray.map(el => {
          return (
            <Element key={el.id}>
              <span>
                {el.name}
              </span>
              <Block background={el.color}>

              </Block>
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
  height: 150px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.02);
  color: grey;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Block = styled.div`
  width: 25px;
  height: 25px;
  background: ${props => props.background};
`;

const Element = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid grey;
`;
