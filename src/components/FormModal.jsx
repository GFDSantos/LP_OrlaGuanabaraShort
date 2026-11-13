import { useEffect, useState } from "react";

const whatsappBase = "https://wa.me/5521972973535?text=";
const vazio = { nome: "", telefone: "", email: "", consentimento: false };

function FormModal({ aberto, fechar, tipo = "informacoes" }) {
  const [form, setForm] = useState(vazio);

  useEffect(() => {
    if (!aberto) return;
    const teclado = (e) => e.key === "Escape" && fechar();
    window.addEventListener("keydown", teclado);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", teclado);
      document.body.style.overflow = "";
    };
  }, [aberto, fechar]);

  if (!aberto) return null;

  const enviar = (event) => {
    event.preventDefault();
    const pedido = tipo === "simulacao" ? "solicitar uma simulação" : "receber informações";
    const mensagem = `Olá! Gostaria de ${pedido} do Orla Guanabara.\nNome: ${form.nome}\nTelefone: ${form.telefone}\nE-mail: ${form.email}`;
    window.open(whatsappBase + encodeURIComponent(mensagem), "_blank", "noopener,noreferrer");
    setForm(vazio); // limpa os dados após o envio
    fechar();
  };

  return (
    <div className="form-overlay" role="dialog" aria-modal="true" aria-labelledby="form-title" onClick={fechar}>
      <form className="lead-form" onSubmit={enviar} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="form-close" onClick={fechar} aria-label="Fechar formulário">×</button>
        <p className="eyebrow">ORLA GUANABARA</p>
        <h2 id="form-title">{tipo === "simulacao" ? "Solicite uma simulação" : "Receba mais informações"}</h2>
        <p className="form-intro">{tipo === "simulacao" ? "Preencha seus dados para solicitar uma simulação pelo WhatsApp." : "Preencha seus dados para iniciar o atendimento pelo WhatsApp."}</p>
        <label>Nome completo<input required type="text" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" autoComplete="name" /></label>
        <label>Celular / WhatsApp<input required type="tel" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(21) 99999-9999" autoComplete="tel" /></label>
        <label>E-mail<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" autoComplete="email" /></label>
        <label className="consent"><input required type="checkbox" checked={form.consentimento} onChange={(e) => setForm({ ...form, consentimento: e.target.checked })} /> Concordo em compartilhar meus dados para receber informações sobre o empreendimento.</label>
        <button className="button form-submit" type="submit">{tipo === "simulacao" ? "Solicitar simulação pelo WhatsApp →" : "Continuar pelo WhatsApp →"}</button>
        <small>Seus dados serão utilizados apenas para dar continuidade ao atendimento solicitado.</small>
      </form>
    </div>
  );
}
export default FormModal;
