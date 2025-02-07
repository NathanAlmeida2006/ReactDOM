"use client";

import { useEffect } from "react";

function CadastroContato() {
  useEffect(() => {
    // Adicionar classes Bootstrap ao componente após a renderização
    const container = document.querySelector(".cadastro-contato");
    container.classList.add("container", "mt-5");

    const heading = container.querySelector("h2");
    heading.classList.add("mb-4", "text-primary");
  }, []);

  return (
    <div className="cadastro-contato">
      <h2>Novo Contato</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            placeholder="Digite seu telefone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensagem" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="mensagem"
            rows="3"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CadastroContato;
