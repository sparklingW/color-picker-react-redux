import React from "react";
import styled from "styled-components";

class RgbBlock extends React.Component {
  render() {
    const { background } = this.props;
    return(
      <Container >
        <Block background={background} />
      </Container>
    )
  }
}

export default RgbBlock;

const Container = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  background: ${props => props.background};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
