import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Character from "../containers/Character";

const App=()=>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/rickandmortyredux" Component={Home}/>
            <Route exact path='/rickandmortyredux/character/:id' Component={Character} />
        </Routes>
    </BrowserRouter>
)

export default App