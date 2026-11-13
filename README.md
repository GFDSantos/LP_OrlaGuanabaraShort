# LP Orla Guanabara — Emccamp (versão inspirada na página da construtora)

Projeto React 18 com Create React App, mantendo a arquitetura da LP_OrlaGuanabara
(componentes em `src/components`, CSS em `src/styles`, imagens em `src/assets`).

## Executar localmente

```bash
npm install
npm start
```

## Gerar versão de produção

```bash
npm run build
```

## Estrutura da página

Navbar → Hero (tela cheia) → O projeto → Formulário (WhatsApp) → Galeria (4 imagens) → Localização → Chamada final → Rodapé.

- O formulário (`src/components/Formulario.jsx`) é o mesmo da LP anterior: abre o WhatsApp (21) 97297-3535 com nome, telefone e e-mail preenchidos.
- Cores centrais em `src/styles/variables.css` (`--teal`, `--emccamp-green`).
- Foram mantidas apenas 7 imagens (hero, fachada, 4 da galeria e localização), otimizadas.
- Os componentes Lazer, Apartamentos e Plantas e as imagens não utilizadas foram removidos desta versão.
