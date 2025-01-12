import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';


const habitData = [
    { date: '2025-02-04', count: 1 },
  ];


  function Reading() {
    return (
      <div className='reading calendar-box'>
        <h2>Reading Activity</h2>
  <CalendarHeatmap
    startDate={new Date('2025-01-15')}
    endDate={new Date('2025-12-31')}
    values={habitData}
    showWeekdayLabels
    gutterSize={2}
    classForValue={(value) => {
      if (!value || value.count === 0) {
        return 'color-empty';
      }
      return `color-scale-${value.count}`;
    }}
  />


      </div>
    );
  }
  
  export default Reading;
  