import React from 'react';
// components

import MyNavbar from "./components/my-navbar/mynavbar.component"
import MyCrousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from "./components/title-message/title-message.components";

import './App.css';

const App=()=> {
  return (
    <div>
    <MyNavbar />
    <MyCrousal/>
    <TitleMessage/>
    </div>
  );
}

export default App;
