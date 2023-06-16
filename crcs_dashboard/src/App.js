import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import {data} from './data';
import SocietiesTable from "./SocietiesTable";
import StatesPieChart from "./StatesPieChart";
import SectorsPieChart from "./SectorsPieChart";
import StackedBarChart from "./StackedBarChart";
import YearHistogram from "./YearWiseChart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Dashboard />} />
          <Route exact path = '/SocietiesTable' element = {<SocietiesTable data={data}/>} />
          <Route exact path = '/StatesPieChart' element = {<StatesPieChart data={data}/>} />
          <Route exact path = '/SectorsPieChart' element = {<SectorsPieChart data={data}/>} />
          <Route exact path = '/StackedBarChart' element = {<StackedBarChart data={data}/>} />
          <Route exact path = '/YearWiseChart' element = {<YearHistogram data={data}/>} />

        </Routes>
        </Router>
    </>
  );
}

export default App;
