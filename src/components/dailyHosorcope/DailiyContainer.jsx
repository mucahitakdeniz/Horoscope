import React, { useState } from "react";
import HososcopeButtons from "./HososcopeButtons";
import DailyCommentCard from "./DailyCommentCard";

const DailiyContainer = ({ data }) => {
  const URL = process.env.React_App_Api_Url;
  console.log(data);
  const [dailyHoroscope, setDailyHoroscope] = useState;
  return (
    <div className="daily-container">
      <h2>Dailiy Horoscope</h2>
      <HososcopeButtons setDailyHoroscope={setDailyHoroscope} data={data} />
      <DailyCommentCard dailyHoroscope={dailyHoroscope} />
    </div>
  );
};

export default DailiyContainer;
