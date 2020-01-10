import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../store/actions";

class DropDown extends React.Component {

  /*
    red, green, blue = value * 2.551
  */

  state = {
    r: this.props.r,
    g: this.props.g,
    b: this.props.b,
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleRange = ({target: {value, name}}) => {
    const { setR_G_B } = this.props;
    const { r, g, b } = this.state;
    this.setState({
      [name] : value,
    }, () => {
      console.log(name, value);
      setR_G_B({r: value, g, b})
    });
  };

  render() {
    const { r, g, b } = this.state;
    const { handleOpenMenu } = this.props;
    return (
      <Container>
        <Elements>
          <RangeBlock>
            <Label>R</Label>
            <RangeRed
              type="range"
              name="red"
              defaultValue={r}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>G</Label>
            <RangeGreen
              type="range"
              name="green"
              defaultValue={g}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>B</Label>
            <RangeBlue
              type="range"
              name="blue"
              defaultValue={b}
              onChange={this.handleRange}
            />
          </RangeBlock>
          <Buttons>
            <Cancel onClick={handleOpenMenu}>
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

const mapStateToProps = (state) => ({
  r: state.r,
  g: state.g,
  b: state.b,
});

const mapDispatchToProps = (dispatch) => ({
  setR_G_B:(payload) => dispatch(actions.setR_G_B(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);

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
