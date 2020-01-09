import React from "react";
import styled from "styled-components";

class DropDown extends React.Component {
  render() {
    return (
      <Container>
        <Elements>

          <RangeRed
            type="range"
          />
          <RangeGreen
            type="range"
          />
          <RangeBlue
            type="range"
          />
        </Elements>
      </Container>
    )
  }
}

export default DropDown;

const Container = styled.div`
  position: absolute;
  top: 66px;
  right: -63px;
  width: 250px;
  height: 225px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.02);
`;

const Elements = styled.div`
  
`;

const RangeRed = styled.input`
  width: 100%;
`;

const RangeGreen = styled.input`
  width: 100%;
`;

const RangeBlue = styled.input`
  width: 100%;
`;
