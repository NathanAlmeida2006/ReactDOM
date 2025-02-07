"use client";

import { useEffect, useState } from "react";

function ConsultaContato() {
  const [contatos, setContatos] = useState([]);

  // Função para carregar os contatos da API
  function load() {
    fetch("http://localhost:3000/contatos")
      .then((response) => response.json()) // Corrigido: response.json() com parênteses
      .then((data) => setContatos(data))
      .catch((error) => console.error("Erro ao carregar contatos:", error));
  }

  // Função para excluir um contato
  function handleExcluir(id) {
    fetch(`http://localhost:3000/contatos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Recarrega a lista de contatos após a exclusão
          load();
        }
      })
      .catch((error) => console.error("Erro ao excluir contato:", error));
  }

  useEffect(() => {
    load(); // Carrega os contatos ao montar o componente

    // Adiciona classes Bootstrap ao componente após a renderização
    const container = document.querySelector(".consulta-contato");
    container.classList.add("container", "mt-5");

    const heading = container.querySelector("h2");
    heading.classList.add("mb-4", "text-primary");
  }, []);

  return (
    <div className="consulta-contato">
      <h2>Consulta de Contatos</h2>
      <form className="mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label htmlFor="filtroNome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="filtroNome"
              placeholder="Filtrar por nome"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="filtroEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="filtroEmail"
              placeholder="Filtrar por e-mail"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="filtroTelefone" className="form-label">
              Telefone
            </label>
            <input
              type="tel"
              className="form-control"
              id="filtroTelefone"
              placeholder="Filtrar por telefone"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Filtrar
        </button>
      </form>

      {/* Cards para exibir os contatos */}
      <div className="row">
        {contatos.map((contato) => (
          <div className="col-md-4 mb-4" key={contato.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{contato.nome}</h5>
                <p className="card-text">
                  <strong>E-mail:</strong> {contato.email}
                </p>
                <p className="card-text">
                  <strong>Telefone:</strong> {contato.telefone}
                </p>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-warning">Editar</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleExcluir(contato.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultaContato;
