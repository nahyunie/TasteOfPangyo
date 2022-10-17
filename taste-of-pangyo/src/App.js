import { useEffect, useRef } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./page/LandingPage";
import Map from "./page/Map";
import RandomRecommend from "./page/RandomRecommend";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                    <Route path="/map" element={<Map />}/>
                    <Route path="/random" element={<RandomRecommend />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;