import React from "react";
import NavBar from "./components/navbar/NavBar";
import'./App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./RowPost/RowPost";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost/>
    </div>
  );
}

export default App;
