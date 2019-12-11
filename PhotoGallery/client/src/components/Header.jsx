import React from 'react';
import styled from 'styled-components';

const StaticHeader = styled.img`
  overflow: auto;
  position: relative;
  max-width:100%;
  height: auto;
  `;

const Header = (props) => {
  return(
    <header>
      <StaticHeader src='https://hrsf124-fec.s3-us-west-1.amazonaws.com/opentable-mockdata/static/header.png'/>
    </header>);
}

export default Header;