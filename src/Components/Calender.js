import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = ({date, setDate}) => {
    return (
     <>
      <DayPicker 
      mode="single"
      selected={date}
      onSelect={setDate}      
      />
     </>
  );
};

export default Calender;