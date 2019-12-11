import React from 'react';
import Dish from './Dish.jsx';
import styled from 'styled-components';

// border-bottom: 1px solid #d8d9db;
const Section = styled.section`
padding: 16px 0px 32px;
border-bottom: 1px solid #d8d9db;
font-weight: bold;
`;

// column-break-inside: avoid;
const SectionDisplay = styled.section`
column-count: 2;
`;

//MENU AND DESCRIPTION SHOULD BE IN SAME DIV with 16px bottom margin
const MenuSectionDescription = styled.section`
font-size: 14px;
margin: 16px 0px 16px;
`;

// padding: 16px 0px 32px;
const MenuSectionName = styled.section`
text-transform: capitalize;
font-size: 16px;
`;

const MenuSection = (props) => {
    var dish = props.dish;
    var division = Object.keys(props.dish);
    division.splice(division.indexOf('description'), 1);
    return (
      <Section>
        <MenuSectionName>{props.name}</MenuSectionName>
        <MenuSectionDescription>{props.dish.description} </MenuSectionDescription>
        <SectionDisplay>
          {division.map((val)=> {return <Dish key={val} name={val} dishInfo={dish[val]}/>})}
        </SectionDisplay>
      </Section>
    )
}

export default MenuSection;

// class MenuSection extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render () {
//     var dish = this.props.dish;
//     var division = Object.keys(this.props.dish);
//     division.splice(division.indexOf('description'), 1);
//     return (

//       <Section>
//         <MenuSectionName>{this.props.name}</MenuSectionName>
//         <MenuSectionDescription>{this.props.dish.description} </MenuSectionDescription>
//         <SectionDisplay>
//           {division.map((val)=> {return <Dish key={val} name={val} dishInfo={dish[val]}/>})}
//         </SectionDisplay>
//       </Section>
//     )
//   }
// }