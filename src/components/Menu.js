import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

function Menu() {
  useEffect(() => {
    // Adicionar classes Bootstrap ao componente após a renderização
    const nav = document.querySelector("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");

    const ul = nav.querySelector("ul");
    ul.classList.add("navbar-nav", "me-auto", "mb-2", "mb-lg-0");

    const links = ul.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.add("nav-link");
    });

    const main = document.querySelector("main");
    main.classList.add("container", "mt-4");
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cadastro" className="nav-link">
              Cadastro
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/consulta" className="nav-link">
              Consulta
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Menu;
