import Header from "../components/header/Header";
import FindHoroscopeModal from "../components/main/FindHoroscopeModal";
import Main from "../components/main/Main";
import React, { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Header setOpen={setOpen} />
      <Main />- {open && <FindHoroscopeModal setOpen={setOpen} />}
    </div>
  );
};

export default Home;
