const whatsapp = "https://wa.me/5521972973535?text=" + encodeURIComponent("Olá! Quero saber mais sobre o Orla Guanabara, da Emccamp.");

function Footer({ abrirFormulario }) {
  return (
    <>
      <section className="cta">
        <div className="container">
          <h2>Viva na melhor região de Niterói. <em>Cadastre-se e saia na frente!</em></h2>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div><b>Atendimento</b><p>Gilberto Santos · Corretor de imóveis</p><p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: (21) 97297-3535</a></p></div>
          </div>
          <p className="legal">Material provisório. Por se tratar de empreendimento a ser construído, o projeto poderá sofrer alterações sem aviso prévio. O paisagismo e o mobiliário representados nas imagens são ilustrativos e poderão divergir do que será efetivamente entregue. As unidades e áreas comuns serão entregues conforme as especificações do Memorial de Incorporação registrado, que prevalecerá em caso de divergência com qualquer outro material. Material de referência: outubro de 2026. © 2026 · Orla Guanabara by Emccamp.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
