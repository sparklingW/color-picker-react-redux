import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../store/actions";
import * as conv from "../../convertsFunctions";

class DropDown extends React.Component {

  /*
    red, green, blue = value * 2.551
  */

  state = {
    r: this.props.r,
    g: this.props.g,
    b: this.props.b,
    save: false,
  };

  componentDidMount() {
    console.log(this.props);
  }

  componentWillUnmount() {
    this.setState({
      save: false,
    })
  }

  setColor = (r, g, b) => {
    const { setR_G_B, setColor, setRgb } = this.props;
    const result = conv.rgbToHex(Number(r), Number(g), Number(b));
    setR_G_B({r, g, b});
    setColor(result);
    setRgb(`${r * 2.55},${g * 2.55},${b * 2.55}`);
  };

  handleSave = () => {
    const { r, g, b, } = this.state;
    this.setState({
      save: true,
    },() => this.props.setR_G_B({r, g, b}));
  };

  handleColorR = ({target: {value}}) => {
    // const { setR_G_B } = this.props;
    const { r, g, b } = this.state;
    this.setState({
      r: Number(value),
    }, () => this.setColor(r, g, b));
  };

  handleColorG = ({target: {value}}) => {
    // const { setR_G_B } = this.props;
    const { r, g, b } = this.state;
    this.setState({
      g: Number(value),
    }, () => this.setColor(r, g, b));
  };

  handleColorB = ({target: {value}}) => {
    // const { setR_G_B } = this.props;
    const { r, g, b } = this.state;
    this.setState({
      b: Number(value),
    }, () => this.setColor(r, g, b));
  };

  handleCancel = () => {
    console.log("Cancel");
    const { handleOpenMenu, setR_G_B, currentRgb } = this.props;
    const splited = currentRgb.split(',');
    setR_G_B({r: splited[0], g: splited[1], b: splited[2]});
    handleOpenMenu();
  };

  render() {
    const { r, g, b } = this.state;
    return (
      <Container>
        <Elements>
          <RangeBlock>
            <Label>R</Label>
            <RangeRed
              type="range"
              name="red"
              defaultValue={r}
              onChange={this.handleColorR}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>G</Label>
            <RangeGreen
              type="range"
              name="green"
              defaultValue={g}
              onChange={this.handleColorG}
            />
          </RangeBlock>
          <RangeBlock>
            <Label>B</Label>
            <RangeBlue
              type="range"
              name="blue"
              defaultValue={b}
              onChange={this.handleColorB}
            />
          </RangeBlock>
          <Buttons>
            <Cancel onClick={this.handleCancel}>
              CANCEL
            </Cancel>
            <OK onClick={this.handleSave}>
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
  currentRgb: state.currentRgb,
});

const mapDispatchToProps = (dispatch) => ({
  setR_G_B:(payload) => dispatch(actions.setR_G_B(payload)),
  setColor: (payload) => dispatch(actions.setColor(payload)),
  setRgb: (payload) => dispatch(actions.setRgb(payload)),
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
