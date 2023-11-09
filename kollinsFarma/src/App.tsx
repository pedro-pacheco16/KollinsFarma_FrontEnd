import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategoria from './componentes/categoria/listaCategoria/ListaCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<ListaCategoria />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;