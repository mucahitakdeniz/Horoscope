import React from "react";

const HososcopeButtons = ({ setDailyHoroscope, data }) => {
  return (
    <div className="daily-buttons">
      {data.map((item, i) => (
        <button key={i} onClick={() => setDailyHoroscope(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default HososcopeButtons;
