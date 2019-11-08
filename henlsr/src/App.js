import React from 'react';
import './App.css';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class BasicConcepts extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      week: undefined,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }
  getUTSCday(){
    if (this.state.selectedDay.getDay() == 0){
      return 7;
    }
    return this.state.selectedDay.getDay()
  }
 

  render() {
    return (
      <div>
        <DayPicker 
          showWeekNumbers
          onDayClick={this.handleDayClick}
          onWeekClick={(week) => this.setState({week: week})}
          selectedDays = {this.state.selectedDay} 
          selectedWeeks = {this.state.week}
        />
        {this.state.selectedDay ? (
  <p>You clicked day: {this.getUTSCday()} You Clicked week: {this.state.week}</p>
        ) : (
          <p>Select a day, then select a week.</p>
        )}
      </div>
    );
  }
}