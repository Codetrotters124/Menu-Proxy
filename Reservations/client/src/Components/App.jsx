import React from 'react';
import PartySize from './PartySize.jsx';
import Time from './Time.jsx';
import FindTable from './FindTable.jsx';
import Date from './Date.jsx';
import styled from 'styled-components';

const Div = styled.div`
  width: 300px;
  border: 1px solid white;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  padding: 50px;
  margin: 20px;
`;

const H1 = styled.h3`
  font-family: Oswald;
  font-size: 21px;
  border-bottom: 1px solid #d8d9db; 
`;
const Select = styled.select`
  cursor: pointer;
  background-color: #fff;
  font-size: .875rem;
  display: block;
  outline: none;
  border: none;
  width: 100%;
  height: 35px;
  -webkit-appearance: none;
  border-radius: 0;
  border-bottom: 1px solid #d8d9db;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
    this.gettingTime = this.gettingTime.bind(this);
    // this.giveButtontime = this.giveButtontime.bind(this);
  }
  gettingTime(times) {
    this.setState({
      time: times
    }, () => { console.log('new state: ', this.state.time); });
    console.log('from app, the value being passed in: ', times);
  }

  render() {
    return (
      <Div>
        <H1>Make a reservation</H1>
        <PartySize Select={Select} />
        <Time Select={Select} gettingTime={this.gettingTime} />
        <Date Select={Select}/>
        <FindTable time={this.state.time} />
      </Div>
    );
  }
}

export default App;