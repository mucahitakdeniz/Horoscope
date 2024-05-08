import React, { useState } from "react";

const FindHoroscopeModal = ({ setOpen, getZodiacSign }) => {
  const [dateValue, setDateValue] = useState(null);
  const [myHoroscoppe, setmyHoroscoppe] = useState(null);
  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleClick = () => {
    if (dateValue) {
      const date = dateValue.split("-");
      const horoscope = getZodiacSign(date[2], date[1]);
      setmyHoroscoppe(horoscope);
    } else {
      alert("Please enter a valid date");
    }
  };
  return (
    <div className="modal">
      <button className="closeButton" onClick={() => setOpen(false)}>
        <img
          src="https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_960_720.png"
          alt="Kapat"
        />
      </button>
      {myHoroscoppe ? (
        <div className="horoscope">
          <h3>{myHoroscoppe}</h3>
          <button className="button" onClick={() => setmyHoroscoppe(null)}>
            Back
          </button>
        </div>
      ) : (
        <div>
          <div className="inputField">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              min="1924-01-01"
              max="2024-12-31"
              onChange={handleDateChange}
            />
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindHoroscopeModal;
