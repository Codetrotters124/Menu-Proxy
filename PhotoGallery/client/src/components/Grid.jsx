import React from 'react';
import InGrid from './InGrid.jsx';
import styled from 'styled-components';
import { throws } from 'assert';


const LeftDiv = styled.div`
  width: 142px;
`;

const RightDiv = styled.div`
  height: 288px;
  flex-shrink: 0;
  background-size: cover;
  width: 288px;
  margin: 0 0 0 .25rem;
  background-image: url(${props => props.url});
`;

const Div = styled.div`
  display: flex;
  margin: 0 .25rem 0 0;
`;

class Grid0 extends React.Component{
  constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event){
    let id = this.props.images[2]._id;
    this.props.event(id);
  }

  render(){
    return(
      <Div>
        <LeftDiv><InGrid images={this.props.images.slice(0,2)} event={this.props.event}/></LeftDiv>
        <RightDiv url={this.props.images[2] ? this.props.images[2].url : undefined} onClick={this.handleEvent}></RightDiv>
      </Div>);
  }
}

export default Grid0;