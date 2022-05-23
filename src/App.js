import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter } from "react-router-dom";
import Routing from  "./ResponsoveWeb/Routing";
import "./index.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter> 
    </>
  )
}
export default App;