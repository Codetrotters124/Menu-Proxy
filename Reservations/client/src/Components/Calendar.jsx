import React from 'react';
import moment from 'moment';
// import { thisExpression, isBlock } from '@babel/types';
import styled from 'styled-components';
const weekdaysShort = moment.weekdaysShort();
const weekdays = moment.weekdays();
const months = moment.months();
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';


const Div = styled.div`
  background-color: #f1f2f4;
  width: 200px;
  margin: 0px 1px;
  padding: 16px 20px;
  border: 1px solid grey;
  font-family: BrandonText
`;
const Tbody = styled.tbody`
  // background-color: red;
  border: 1px solid grey;
  display: table-cell;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  font-weight: 500;
  background-clip: padding-box
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false
    };
    this.monthNav = this.monthNav.bind(this);
    this.SelectList = this.SelectList.bind(this);
    // this.yearNav = this.yearNav.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
  }
  year() {
    return this.state.dateObject.format('Y');
  }
  month() {
    return this.state.dateObject.format('MMMM');
  }
  daysInMonth() {
    return this.state.dateObject.daysInMonth();
  }
  currentDate() {
    return this.state.dateObject.get('date');
  }
  currentDay() {
    return this.state.dateObject.format('d');
  }
  firstDayOfMonth() {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  } 
  setMonth(month) {
    let monthNum = months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).set('month', monthNum);
    this.setState({
      dateObject: dateContext
    });
  }
  onSelectChange(e, data) {
    this.setMonth(data);
    this.props.onChangeMonth() && this.props.onChangeMonth();
  }
  SelectList(props) {
    let popup = props.data.map((data) => {
      return (
        <div key={data}>
          <a href="#" onClick={(e) => { this.onSelectChange(e, data); }}>
            {data}
          </a>
        </div>
      );
    });
    return (
      <div>
        {popup}
      </div>
    );
  }
  showYearEditor() {
    this.setState({
      showYearPopup: true
    });
  }

  onChangeMonth(e, month) {
    let monthPopup = this.state.showMonthPopup;
    this.setState({
      showMonthPopup: !monthPopup
    });
  }
  monthNav() {
    return (
      <span
        onClick={(e) => { this.onChangeMonth(e, this.month()); }}>
        {this.month()}
        {this.state.showMonthPopup && <this.SelectList data={months} />}        
      </span>
    );
  }
  nextMonth() {
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).add(1, 'month');
    this.setState({
      dateObject: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }
  previousMonth() {
    let dateContext = Object.assign({}, this.state.dateObject);
    dateContext = moment(dateContext).subtract(1, 'month');
    this.setState({
      dateObject: dateContext
    });
    this.props.onPreviousMonth && this.props.onPreviousMonth();
  }
  onDayClick(e, day) {
    this.props.onDayClick && this.props.onDayClick(e, day);
    console.log(day);
  }
  render() {  
    let weekdays = weekdaysShort.map((day) => {
      return (
        <td key={day}>{day}
          <span onClick={(e) => { this.onDayClick(e, day); }}></span>
        </td>
      );
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80}>{''}</td>
      );
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = (d === this.currentDay() ? 'day current-day' : 'day');
      daysInMonth.push(
        <td key={d}>
          <span onClick={(e)=> { this.onDayClick(e, d); }}>{d}</span>
        </td>
      );
    }
    let totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if ((i % 7) !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    let trElems = rows.map((data, i) => {
      return (
        <tr key={i * 100}>
          {data}
        </tr>
      );
    });
    return (
      <Div>
        <span>
          <button onClick={this.previousMonth}> <GoChevronLeft onClick={() => this.previousMonth} /> </button>
          {this.month()} {this.year()}
          <button onClick={this.nextMonth}> <GoChevronRight onClick={() => this.nextMonth} /> </button>        
        </span>
        <table>
          <Tbody>
            <tr>
              {weekdays}
            </tr>
            {trElems}
          </Tbody>
        </table>
      </Div>
    );
  } 
}

export default Calendar;
