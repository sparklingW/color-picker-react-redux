import React from "react";
import DropDown from "../color-picker/drop-down";
import styled from "styled-components";

class RgbBlock extends React.Component {

  state = {
    isOpenedMenu: true,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpenedMenu: false
      });
    }
  };

  handleOpenMenu = () => {
    this.setState({
      isOpenedMenu: !this.state.isOpenedMenu,
    })
  };

  render() {
    const { background } = this.props;
    const { isOpenedMenu } = this.state;
    return(
      <Container >
        <Block background={background} onClick={this.handleOpenMenu} />
        <div ref={this.setWrapperRef}>
          {
            isOpenedMenu && <DropDown />
          }
        </div>
      </Container>
    )
  }
}

export default RgbBlock;

const Container = styled.div`
  position: relative;
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  background: ${props => props.background ? `rgb(${props.background})` : "grey"};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
