"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import CadastroContato from "./components/CadastroContato";
import ConsultaContato from "./components/ConsultaContato";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    // Adicionar classes Bootstrap ao body
    document.body.classList.add("bg-light");

    // Adicionar classes Bootstrap ao container principal
    const mainContainer = document.getElementById("root");
    mainContainer.classList.add("container-fluid", "p-0");

    // Estilizar as rotas
    const routesContainer = document.querySelector(".routes-container");
    routesContainer.classList.add("container", "mt-4");
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Menu />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cadastro" element={<CadastroContato />} />
            <Route path="consulta" element={<ConsultaContato />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
