# mondrianer

Gerador de arte generativa interativo inspirado em Piet Mondrian, com recursão fractal, animações 3D dinâmicas e controle paramétrico em tempo real.

**Demo:** https://mondrianer.vercel.app

**Stack:** React 18 · TypeScript 4.9 · Styled Components 6 · Redux Toolkit 2 · CRA 5

---

## Arquitetura

```
App.tsx (Redux Provider + GlobalStyle)
     │
     ├── Menu                       ← controles interativos (sliders, toggles)
     │
     └── Layers
          ├── Mondrianer #1
          │    └── recursive()      ← divisão fractal alternando H/V
          │         └── MondrianGrid
          │              ├── MondrianBlock  (cor, opacidade, translateZ)
          │              └── MondrianGrid   (aninhado recursivamente)
          └── Mondrianer #N ...

Redux Store (mondrianerConfig)
  ├── recursion · trigger · transparency
  ├── layers · gap
  ├── animateColor · animateGrid · animateDepth
  ├── minDelay · maxDelay · perspective · height
  └── refresher (força re-render)
```

---

## Funcionalidades

| Parâmetro | Descrição |
| --- | --- |
| **Recursão** (0–10) | Profundidade do padrão fractal |
| **Camadas** (1–10) | Instâncias sobrepostas em perspectiva 3D |
| **Gap** | Espaçamento entre blocos (px ou %) |
| **Saturação** | Ponto de ramificação aleatória |
| **Transparência** | Frequência de blocos transparentes |
| **Animar grid** | Muda proporções das colunas/linhas dinamicamente |
| **Animar cores** | Alterna paleta Mondrian em tempo real |
| **Animar profundidade** | Move blocos no eixo Z (efeito 3D) |
| **Delay min/max** | Intervalo de animação entre 10s e 120s |

**Paleta:** `#314290` · `#4A71C0` · `#F1F2ED` · `#F0D32D` · `#AB3A2C`

---

## Pré-requisitos

| Ferramenta | Versão mínima |
| --- | --- |
| Node.js | 16+ |
| npm | 8+ |

---

## Instalação e execução

```bash
# Clonar o repositório
git clone <repo-url>
cd mondrianer

# Instalar dependências
npm install

# Servidor de desenvolvimento
npm start
```

A aplicação abre automaticamente em `http://localhost:3000` com hot reload.

### Build de produção

```bash
npm run build
```

Output otimizado gerado em `./build/`, pronto para deploy.

---

## Scripts

| Script | Descrição |
| --- | --- |
| `npm start` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build otimizado para produção |
| `npm test` | Suíte de testes Jest (watch mode) |
| `npm run lint` | Verificação ESLint |
| `npm run format` | Auto-formatação Prettier |

---

## URLs de acesso

| Ambiente | URL |
| --- | --- |
| Desenvolvimento | http://localhost:3000 |
| Demo ao vivo | https://mondrianer.vercel.app |
