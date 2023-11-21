import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import KelasPage from "./pages/KelasPage";
import Syarat from "./pages/Syarat";
import Testi from "./pages/Testi";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/testi" Component={Testi} />
          <Route path="/faq" Component={FaqPage} />
          <Route path="/syarat" Component={Syarat} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
