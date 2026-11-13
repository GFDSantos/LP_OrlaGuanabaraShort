import logoOrlaEmccamp from "../assets/logos/orla-emccamp-navbar.png";

function Navbar({ abrirFormulario }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#inicio" aria-label="Orla Guanabara início">
          <img className="nav-logo" src={logoOrlaEmccamp} alt="Orla Guanabara e Emccamp Residencial" />
        </a>
        <nav className="nav-links">
          <a href="#projeto">O projeto</a>
          <a href="#galeria">Galeria</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <div className="nav-actions">
          <button className="button small button-simulation" onClick={() => abrirFormulario("simulacao")}>Solicitar simulação</button>
          <button className="button small" onClick={() => abrirFormulario("informacoes")}>Fale com um corretor</button>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
