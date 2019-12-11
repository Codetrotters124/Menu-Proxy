import React from 'react';
import styled from 'styled-components';
import Grid from './Grid.jsx';

const PositionDiv = styled.div`
  position: relative;
`;

const OverflowDiv = styled.div`
  overflow: hidden;
`;

const FlexDiv = styled.div`
  display: flex;
  background-color: #2d333f;
`;

const Div = styled.div`
  background-size: cover;
  flex-shrink: 0;
  height: 288px;
  width: 288px;
  margin: 0;
  background-image: url(${props => props.url});
`;

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
  };

  handleEvent(event){
    let id = this.props.gallery[9]._id;
    this.props.event(id);
  }

  render(){
    return(
      <PositionDiv>
        <OverflowDiv>
          <FlexDiv>
            <Grid images={this.props.gallery.slice(0,3)} event={this.props.event}/>
            <Grid images={this.props.gallery.slice(3,6)} event={this.props.event}/>
            <Grid images={this.props.gallery.slice(6,9)} event={this.props.event}/>
            <Div url={this.props.gallery[9] ? this.props.gallery[9].url : undefined} onClick={this.handleEvent}></Div>
          </FlexDiv>
        </OverflowDiv>
      </PositionDiv>);
  };
}


export default Gallery;