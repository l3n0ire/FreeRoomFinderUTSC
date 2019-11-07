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
  getWeek(){
    var d = new Date();
    var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    
    return Math.ceil((this.state.selectedDay.getDate() + firstDay)/7) -1;
  }

  render() {
    return (
      <div>
        <DayPicker 
          onDayClick={this.handleDayClick}
          selectedDays = {this.state.selectedDay} 
        />
        {this.state.selectedDay ? (
          <p>You clicked day: {this.getUTSCday()} and week: {this.getWeek()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}