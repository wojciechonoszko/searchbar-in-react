import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import BookData from './data.json';

function App() {
  return <div className="App">
    <SearchBar placeholder="Enter a name of user" data={BookData}/>
  </div>;
}

export default App;
