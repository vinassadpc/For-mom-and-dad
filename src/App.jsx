import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import bgMusic from "./assets/music.mp3";

import Home from "./pages/Home";
import Memories from "./pages/Memories";

export default function App() {

const musicAudio = useRef(new Audio(bgMusic));

musicAudio.current.loop = true;
musicAudio.current.volume = 0.015;


return (
  <BrowserRouter>
    <Routes>
      <Route
      path="/"
      element={<Home musicAudio={musicAudio} />}
    />

    <Route
      path="/memories"
      element={<Memories musicAudio={musicAudio} />}
    />
    </Routes>
  </BrowserRouter>
);
}