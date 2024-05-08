import Header from "../components/header/Header";
import FindHoroscopeModal from "../components/main/FindHoroscopeModal";
import Main from "../components/main/Main";
import React, { useState } from "react";
import getZodiacSign from "../helpers/getZodiacSign";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header setOpen={setOpen} />
      <Main />
      {open && (
        <FindHoroscopeModal setOpen={setOpen} getZodiacSign={getZodiacSign} />
      )}
    </div>
  );
};

export default Home;
