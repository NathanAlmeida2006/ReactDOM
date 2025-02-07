"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom"; // Substitua next/link por react-router-dom

function Home() {
  useEffect(() => {
    // Adicionar classes Bootstrap ao componente após a renderização
    const container = document.querySelector(".home-container");
    container.classList.add("container", "mt-5");

    const heading = container.querySelector("h2");
    heading.classList.add("mb-4", "text-primary");

    const paragraph = container.querySelector("p");
    paragraph.classList.add("lead");

    const buttonGroup = container.querySelector(".button-group");
    buttonGroup.classList.add("d-flex", "gap-3", "mt-4");
  }, []);

  return (
    <div className="home-container">
      <h2>Bem-vindo ao Sistema de Contatos</h2>
      <p>
        Gerencie seus contatos de forma fácil e rápida. Aqui você pode cadastrar
        novos contatos, consultar a lista de contatos existentes e muito mais.
      </p>

      {/* Grupo de botões para navegação */}
      <div className="button-group">
        <Link to="/cadastro">
          <button className="btn btn-primary btn-lg">Cadastrar Contato</button>
        </Link>
        <Link to="/consulta">
          <button className="btn btn-success btn-lg">Consultar Contatos</button>
        </Link>
      </div>

      {/* Seção de informações adicionais */}
      <div className="mt-5">
        <h3 className="mb-3">Recursos do Sistema</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Cadastro rápido e intuitivo de contatos.
          </li>
          <li className="list-group-item">
            Consulta de contatos por nome, e-mail ou telefone.
          </li>
          <li className="list-group-item">Edição e exclusão de contatos.</li>
          <li className="list-group-item">Interface amigável e responsiva.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
