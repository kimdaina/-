import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Head from "./components/Header/Head";
import Main from "./components/Main/Main"

function App(){
  return(
    <div>
      <BrowserRouter>
        <Head/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;