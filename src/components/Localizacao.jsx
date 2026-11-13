import pontosRegiao from "../assets/images/localizacao_pontos.jpg";

const pontos = [
  ["3–5 min", "Terminal João Goulart"],
  ["3–5 min", "Shopping Bay Market"],
  ["5–8 min", "Estação das Barcas"],
  ["10–15 min", "UFF — Campus do Gragoatá"]
];

function Localizacao() {
  return (
    <section className="location" id="localizacao">
      <div className="container location-grid">
        <div>
          <p className="eyebrow">No coração de Niterói</p>
          <h2>Uma região em <em>transformação.</em></h2>
          <p className="location-copy">Na região do Caminho Niemeyer, arte, arquitetura e a beleza da Baía de Guanabara se encontram em um dos cenários mais marcantes da cidade, com a revitalização do Centro e novas oportunidades para morar e conviver.</p>
          <ul className="near">
            {pontos.map(([tempo, nome]) => <li key={nome}><b>{tempo}</b>{nome}</li>)}
          </ul>
          <p className="note">Tempos indicados no material de divulgação do empreendimento.</p>
        </div>
        <img src={pontosRegiao} alt="Pontos de referência próximos ao Orla Guanabara" loading="lazy" />
      </div>
    </section>
  );
}
export default Localizacao;
