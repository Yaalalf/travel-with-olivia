"use client";

import { useState } from "react";
import YlButton from "../yl-button";
import YlIcon from "../yl-icon";

export default function YLCalendar() {
  const [month, setMorth] = useState(EMonth.JANUARY);

  return (
    <div className="yl-calendar">
      <div className="yl-calendar-header">
        <div className="yl-calendar-month-display">
          <YlButton>
            <YlIcon icon="/chevron-left-icon.svg" />
          </YlButton>
          <YlButton>{month}</YlButton>
          <YlButton>
            <YlIcon icon="/chevron-right-icon.svg" />
          </YlButton>
        </div>
      </div>
    </div>
  );
}

enum EMonth {
  JANUARY = "January",
  FEBRUARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December",
}
enum EDay {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}
