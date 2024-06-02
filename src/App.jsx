import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Footer from "./components/footer";
import Adv from "./components/adv";
import "./i18n";

function App() {
  return (
    <>
      <Nav />
      <Adv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
