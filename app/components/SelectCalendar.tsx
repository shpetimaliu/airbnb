"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function SelectCalendar() {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <DateRange
        showDateDisplay={false}
        rangeColors={["#FF5A5F"]}
        ranges={dates}
        onChange={(item) => setDates([item.selection] as any)}
        minDate={new Date()}
        direction="vertical"
      />
    </div>
  );
}

export default SelectCalendar;
