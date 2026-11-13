import aerea from "../assets/images/fotomontagem_aerea.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio" style={{ backgroundImage: `url(${aerea})` }}>
      <div className="container hero-content">
        <span className="hero-tag">Breve lançamento · Centro, Niterói</span>
        <h1>Um novo horizonte para Niterói.</h1>
        <p>Vista definitiva para a Baía de Guanabara, perto do Caminho Niemeyer, com conforto, praticidade e lazer completo.</p>
      </div>
    </section>
  );
}
export default Hero;
