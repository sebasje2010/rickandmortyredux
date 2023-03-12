import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";

const App=()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Home}></Route>
        </Routes>
    </BrowserRouter>
)

export default App