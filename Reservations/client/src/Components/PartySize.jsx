import React from 'react';
import styled from 'styled-components';
// import {GoChevronDown} from 'react-icons/go';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Span = styled.span`
  font-size: .875rem;
  font-weight: 500;
  padding-bottom: .25rem; 
`;


class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log('handle change, target value: ', event.target.value);
    // this.props.gettingPartySize(event.target.value);
  }
  render() {
    let partySize = [];
    for (let i = 2; i < 8; i++) {
      partySize.push(i);
    }
    return (
      <div>
        <Span style={{fontWeight: 'bold'}}>Party Size </Span><br />
        <this.props.Select value={this.state.value} onChange={this.handleChange}> 
          
          {partySize.map((item, i) =>
            <option key={i * 8}>{item } </option>
          )}
        </this.props.Select>
        
      </div>
    );
  }
}

export default PartySize;