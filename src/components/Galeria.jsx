import piscina from "../assets/images/piscina.jpg";
import rooftop from "../assets/images/rooftop_destaque.jpg";
import living from "../assets/images/living_1_quarto.jpg";
import portaria from "../assets/images/portaria.jpg";

const imagens = [
  { src: piscina, title: "Piscina" },
  { src: rooftop, title: "Rooftop com vista para a Baía" },
  { src: living, title: "Living" },
  { src: portaria, title: "Portaria" }
];

function Galeria({ abrirImagem }) {
  return (
    <section id="galeria">
      <div className="container">
        <p className="eyebrow">Galeria de imagens</p>
        <h2>Um cenário para <em>chamar de seu.</em></h2>
        <div className="gallery">
          {imagens.map((imagem) => (
            <button key={imagem.title} onClick={() => abrirImagem(imagem, imagens)} aria-label={`Ampliar: ${imagem.title}`}>
              <img src={imagem.src} alt={imagem.title} loading="lazy" />
              <span>{imagem.title}</span>
            </button>
          ))}
        </div>
        <p className="note">Perspectivas artísticas e imagens meramente ilustrativas. Mobiliário e decoração podem não integrar o memorial descritivo.</p>
      </div>
    </section>
  );
}
export default Galeria;
