import React from 'react';
import styled from 'styled-components';

const times = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'];
const Button = styled.button`
  background: #da3743;
  border: none;
  color: white;
  margin-top: 0.5em;
  padding: .75rem 1rem;
  text-align: center;
  align-items: flex-start;
  font-weight: 500;
  display: inline-block;
  border-radius: 2px;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  &:hover {
    opacity: 0.7;
  }
`;
const SmallButton = styled(Button)`
  background-color: #da3743;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 4px;
  width: 72px;
  height: 32px;
  font-size: .875rem;
`;

class FindTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    // e.preventDefault();
    let current = this.state.clicked;
    this.setState({
      clicked: !current
    });
    // let index = times.indexOf(this.props.time);
    // let arr = times.slice(index, (index + 3));
    // if (this.state.clicked === true) {
    // <AvailableTime times={arr} />;
    // }
  }
  arrayValue() {
    let index = times.indexOf(this.props.time);
    let arr = times.slice(index, (index + 3));
    return arr;
  }
  render() {
    return (
      <div>
        
        {this.state.clicked ? <AvailableTime times={this.arrayValue()}/> : <Button onClick={this.handleSubmit}>Find Table</Button>}
      </div>
    );
  }
}
const AvailableTime = (props) => {
  console.log(props.times);
  return (
    <div>
      <span style={{fontWeight: 'bold'}}>Select a time: </span>
      {props.times.map((time, i) =>
        <SmallButton key={i * 8} small>{time}</SmallButton>
      )}
    </div>
  );
};

export default FindTable;