import { Chart } from "react-google-charts";
import React from "react";

const ChartOne = () => {
  const data = [
    ["Destination", "Bookings"],
    ["Varanasi, Uttar Pradesh, India", 500],
    ["Alleppey, Kerala", 700],
    ["Jaipur, India", 450],
    ["Ladakh, India", 600],
    ["Kullu-Manali, Himachal Pradesh",500]
  ];

  const options = {
    title: "Most Popular Travel Destinations",
    pieHole: 0.4,
  is3D: false,
 
  };
  return (
    <div className=" bg-light ">
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
};

export default ChartOne;
