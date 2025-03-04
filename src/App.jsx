import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContent />
    </BrowserRouter>
  );
}

const MainContent = () => {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

export default App;
