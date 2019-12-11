import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`;


class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: this.props.buttons[0]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick (event) {
    if (event.target.name) {
      this.setState({clickedButton: event.target.name})
      this.props.setMenu(event);
    }
  }

  render() {
    return (
      <div className="menu-header" onClick={this.onClick}>
        {this.props.buttons.map((menu) => {
          return <button
          className={this.state.clickedButton === menu ? "clicked-button" : "individual-button"}
          key={menu}
          name={menu}>
            {menu}
          </button>
        })}
      </div>
    )
  }
}


export default MenuButton;