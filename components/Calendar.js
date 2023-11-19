import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Lunch Meeting",
    start: new Date(2023, 10, 15), // November 10th, 2023
    end: new Date(2023, 10, 15), // November 10th, 2023
    allDay: true,
  },
  {
    title: "After-School Meeting",
    start: new Date(2023, 10, 29),
    end: new Date(2023, 10, 29),
    allDay: true,
  },
  {
    title: "Lunch Meeting",
    start: new Date(2023, 11, 6), // November 10th, 2023
    end: new Date(2023, 11, 6), // November 10th, 2023
    allDay: true,
  },
  {
    title: "After-School Meeting",
    start: new Date(2023, 11, 13),
    end: new Date(2023, 11, 13),
    allDay: true,
  },
];
export default function CalendarComponent() {
  const eventStyleGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: "#bfdbfe",
      textAlign: "center",
      color: "rgb(57, 56, 56)",
      borderRadius: "20px",
      fontSize: "13px",
      marginTop: "10px",
      fontWeight: "bold",
      border: "none",
    };

    return {
      style: newStyle,
    };
  };

  return (
    <div id="Calendar">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">Calendar</h1>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          views={["month"]}
          timeslots={2}
          defaultView="month"
          defaultDate={new Date()}
          selectable={true}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
}
