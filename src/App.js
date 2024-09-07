import "./App.css";
import {Routes, Route } from "react-router-dom";
import AppName from "./AppName";
import Navbar from "./Navbar";
import Report from "./Report";
import Dashboard from "./Dashboard";
import Advices from "./Advices";

function App() {
  return (
    <div className="App">
      <AppName />
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/advices" element={<Advices />} />
      </Routes>
    </div>
  );
}

export default App;
