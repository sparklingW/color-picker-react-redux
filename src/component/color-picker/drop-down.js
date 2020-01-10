import React from "react";
import styled from "styled-components";

class DropDown extends React.Component {

  /*
    red, green, blue = value * 2.551
  */

  state = {
    red: 255,
    green: 0,
    blue: 0,
  };

  handleRange = ({target: {value, name}}) => {
    this.setState({
      [name] : value,
    });
  };

  render() {
    const { red, green, blue } = this.state;
    return (
      <Container>
        <Elements>
          <RangeBlock>
            <Label>R</Label>
            <RangeRed
              type="range"
              name="red"
              value={red}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>G</Label>
            <RangeGreen
              type="range"
              name="green"
              value={green}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>B</Label>
            <RangeBlue
              type="range"
              name="blue"
              value={blue}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <Buttons>
            <Cancel>
              CANCEL
            </Cancel>
            <OK>
              OK
            </OK>
          </Buttons>
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
  height: 150px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.02);
`;

const Elements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: inherit;
`;

const RangeBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.div`
  color: grey;
  font-size: 16px;
  margin: 0 0 0 5px;
`;

const RangeRed = styled.input`
  background-image: linear-gradient(to left, #dd1818, #333333);
`;

const RangeGreen = styled.input`
  background-image: linear-gradient(to left, #0f9b0f, #000000);
`;

const RangeBlue = styled.input`
  background-image: linear-gradient(to left, #4286f4, #373B44);
  flex: 0 0 85.5%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Cancel = styled.button`
  outline: none;
  background-color: rgba(128,128,128,0.24);
  border: 1px solid rgba(128,128,128,0.24);
  color: rgba(128,128,128,0.74);
  cursor: pointer;
`;

const OK = styled.button`
  margin: 0 10px 0 10px;
  cursor: pointer;
  outline: none;
  width: 40px;
  height: 25px;
  background-color: #00c100;
  border: 1px solid #00c100;
  color: #FFF;
`;
