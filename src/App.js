import { useCallback, useEffect, useState } from "react";
import "./App.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/sections.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Formulario from "./components/Formulario";
import Galeria from "./components/Galeria";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import FormModal from "./components/FormModal";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [galeria, setGaleria] = useState(null);
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [tipoFormulario, setTipoFormulario] = useState("informacoes");
  const abrirFormulario = (tipo = "informacoes") => { setTipoFormulario(tipo); setFormularioAberto(true); };
  const fecharFormulario = useCallback(() => setFormularioAberto(false), []);
  const abrirImagem = (imagem, grupo) => setGaleria({ imagens: grupo, indice: grupo.findIndex((i) => i.src === imagem.src) });
  const navegar = (d) => setGaleria((g) => ({ ...g, indice: (g.indice + d + g.imagens.length) % g.imagens.length }));
  useEffect(() => {
    if (!galeria) return;
    const teclado = (e) => {
      if (e.key === "Escape") setGaleria(null);
      if (e.key === "ArrowRight") navegar(1);
      if (e.key === "ArrowLeft") navegar(-1);
    };
    window.addEventListener("keydown", teclado);
    return () => window.removeEventListener("keydown", teclado);
  }, [galeria]);
  const atual = galeria?.imagens[galeria.indice];
  return (
    <>
      <Navbar abrirFormulario={abrirFormulario} />
      <main>
        <Hero />
        <Sobre />
        <Formulario abrirFormulario={abrirFormulario} />
        <Galeria abrirImagem={abrirImagem} />
        <Localizacao />
      </main>
      <Footer abrirFormulario={abrirFormulario} />
      <WhatsAppButton />
      <FormModal aberto={formularioAberto} fechar={fecharFormulario} tipo={tipoFormulario} />
      {galeria && atual && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada" onClick={() => setGaleria(null)}>
          <button className="lb-close" onClick={() => setGaleria(null)} aria-label="Fechar imagem">×</button>
          <button className="lb-arrow lb-prev" onClick={(e) => { e.stopPropagation(); navegar(-1); }} aria-label="Imagem anterior">‹</button>
          <img src={atual.src} alt={atual.title} onClick={(e) => e.stopPropagation()} />
          <button className="lb-arrow lb-next" onClick={(e) => { e.stopPropagation(); navegar(1); }} aria-label="Próxima imagem">›</button>
        </div>
      )}
    </>
  );
}
export default App;
