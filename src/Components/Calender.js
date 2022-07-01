import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Calender = ({ date, setDate }) => {
  const formattedDate = format(date, "PP");
  return (
    <div className="my-20">
      <div className="flex justify-center">
        <DayPicker mode="single" selected={date} onSelect={setDate} />
      </div>
      <p className="text-center"><span className="font-bold text-xl">Selected Date:</span> {formattedDate}</p>
    </div>
  );
};

export default Calender;
