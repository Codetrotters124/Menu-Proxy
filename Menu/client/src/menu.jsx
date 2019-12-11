import React from 'react';
import MenuSection from './MenuSection.jsx';
import styled from 'styled-components';

const MenuDescription = styled.section`
font-size: 16px;
padding: 16px 0px;
border-bottom: 1px solid #d8d9db;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var division = Object.keys(this.props.menu);
    division.splice(division.indexOf('description'), 1);
    if (this.props.collapse) {
      division = division.slice(0,2);
    }
    let description = <span></span>
    if (this.props.menu.description) {
      description = <MenuDescription>{this.props.menu.description}</MenuDescription>;
    }
    return (
      <div>
        {description}
        {division.map((val) => {return <MenuSection key={val} name={val} dish={this.props.menu[val]}/>})}
      </div>
    )
  }
}

export default Menu;
