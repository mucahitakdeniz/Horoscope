import React from "react";

const FindHoroscopeModal = ({ setOpen }) => {
  return (
    <div className="modal">
      <button onClick={() => setOpen(false)}>
        <img
          src="https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_960_720.png"
          alt="Kapat"
        />
      </button>
    </div>
  );
};

export default FindHoroscopeModal;
