import fachada from "../assets/images/fachada.jpg";

function Formulario({ abrirFormulario }) {
  return (
    <section className="discover" id="contato">
      <div className="container discover-grid">
        <img className="discover-img" src={fachada} alt="Fachada ilustrativa do Orla Guanabara" />
        <div>
          <p className="eyebrow">Orla Guanabara</p>
          <h2>Descubra um novo <em>horizonte.</em></h2>
          <p className="discover-sub">Fale com nossos consultores e receba mais informações no seu WhatsApp.</p>
          <button className="button" onClick={abrirFormulario}>Receba mais informações</button>
        </div>
      </div>
    </section>
  );
}
export default Formulario;
