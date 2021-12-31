import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Historia from './pages/Historia';
import Miembros from './pages/Miembros';
import Novedades from './pages/Novedades';
import Galeria from './pages/Galeria';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/miembros" element={<Miembros />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);