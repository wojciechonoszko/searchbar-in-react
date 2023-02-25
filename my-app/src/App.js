import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import UserData from './data.json';

function App() {
  return <div className="App">
    <SearchBar placeholder="Enter a name of user" data={UserData}/>
  </div>;
}

export default App;
