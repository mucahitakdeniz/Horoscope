import React, { useState } from "react";
import HososcopeButtons from "./HososcopeButtons";
import DailyCommentCard from "./DailyCommentCard";
import "./Daily.scss"

const DailiyContainer = () => {
  const data = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const [dailyHoroscope, setDailyHoroscope] = useState(null);
  return (
    <div className="daily-container">
      <h2>Daily Horoscope</h2>
      <HososcopeButtons setDailyHoroscope={setDailyHoroscope} data={data} />
      {dailyHoroscope && <DailyCommentCard dailyHoroscope={dailyHoroscope} />}
    </div>
  );
};

export default DailiyContainer;
