import React from 'react';
import Calendar from './Calendar.jsx';
// import {GoChevronDown} from 'react-icons/go';


class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2',
      view: 'option'
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  changeView(option) {
    console.log(option);
    this.setState({
      view: option
    });
  }
  renderView() {
    const {view} = this.state;
    if (view === 'option') {
      return;
    } else if (view === 'calendar') {
      return <Calendar />;
    }
  }
  render() {
    return (
      <div>
        <span style={{fontWeight: 'bold'}}>Date </span><br />
        <this.props.Select onClick={() => this.changeView('calendar')}>
          <option></option>
        </this.props.Select>
        <div>
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default Date;