import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.section`
font-size: 14px;
margin: 0px 0px 16px;
break-inside: avoid-column;
font-weight: bold;
`;

const DishName = styled.section`
display: inline-block;
text-transform: capitalize;
`;

//Maybe Not need this
const DishHeader = styled.section`
`;

// need text of dish name to shift down. dish price needs to stay put
const DishPrice = styled.section`
display: inline-block;
float: right;
`;

const DishDescription = styled.section`
font-weight: normal;
margin: 8px 0px 0px;
`;

const DishSubInfo = styled.section`
text-transform: capitalize;
display: inline-block;
`;

const SubDishContent = styled.section`
border-left: 1px solid black;
margin: 8px 0px 0px;
padding: 0px 0px 0px 8px;
`;



const Dish = (props) => {
  if (!props.dishInfo.price) {
    let subItem = Object.keys(props.dishInfo);
    subItem.splice(subItem.indexOf('description'), 1);
    return (
        <MenuItem>
          <DishHeader>
            <DishName>{props.name}</DishName>
          </DishHeader>
          <DishDescription>{props.dishInfo.description}</DishDescription>
          {subItem.map((val) => {
            return (
              <SubDishContent key={val}>
                <DishSubInfo>{val}</DishSubInfo>
                <DishPrice>${props.dishInfo[val].price}.00</DishPrice>
              </SubDishContent>
            )})}
        </MenuItem>
    )
  }

  if (props.dishInfo.price) {
    return (
      <MenuItem>
      <DishHeader>
        <DishName>{props.name}</DishName>
        <DishPrice>${props.dishInfo.price}.00</DishPrice>
      </DishHeader>
        <DishDescription>{props.dishInfo.description}</DishDescription>
      </MenuItem>
    )
  }
}

export default Dish;