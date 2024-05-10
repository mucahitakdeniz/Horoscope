import axios from "axios";
import React, { useEffect, useState } from "react";

const DailyCommentCard = ({ dailyHoroscope }) => {
  const URL = process.env.React_App_Api_Url;
  const [info, setInfo] = useState({ horoscope: "" });
  const [day, setDay] = useState("today");
  //yesterday, today

  const getHoroscope = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/${dailyHoroscope.toLowerCase()}/${day}/`
      );
      setInfo(data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try again");
    }
  };
  useEffect(() => {
    getHoroscope();
  }, [dailyHoroscope, day]);

  return (
    <div className="daily-horoscope">
      

      <h3>{dailyHoroscope}</h3>
      <p>{info.horoscope}</p>
      <div>
        {day == "yesterday" && (
          <button onClick={() => setDay("today")}>Today</button>
        )}
        {day == "today" && (
          <button onClick={() => setDay("yesterday")}>Yesterday</button>
        )}
      </div>
    </div>
  );
};

export default DailyCommentCard;
