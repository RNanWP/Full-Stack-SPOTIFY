import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artist";
import Artist from "./pages/Artist";
import Songs from "./pages/Artist";
import Song from "./pages/Artist";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
