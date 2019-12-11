import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 142px;
  flex-shrink: 0;
  background-size: cover;
  width: 142px;
  margin-bottom: ${props => props.marginBottom};
  background-image: url(${props => props.url});
`;


class InGrid extends React.Component{
  constructor(props){
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event){
    this.props.event(event.target.id);
  }

  render(){
    return(
      <div>
        <Div id={this.props.images[0] ? this.props.images[0]._id : undefined} marginBottom={'.25em'} url={this.props.images[0] ? this.props.images[0].url : undefined} onClick={this.handleEvent}></Div>
        <Div id={this.props.images[1] ? this.props.images[1]._id : undefined} marginBottom={'0em'} url={this.props.images[1] ? this.props.images[1].url : undefined} onClick={this.handleEvent}></Div>
      </div>)
  }
}

export default InGrid;