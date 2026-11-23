<div align="center">

<img src="Portifolio/public/videos/apresentacao-poster.jpg" alt="Portfólio de Maykon Felix — Software Engineer levando IA aplicada para produtos web reais" width="520" />

# Maykon Felix · Portfólio

**Software Engineer levando IA aplicada para produtos web reais.**

[![Site](https://img.shields.io/badge/site-maykon.xyz-C8F169?style=for-the-badge&labelColor=111111)](https://maykon.xyz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-maykonfelix-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=111111)](https://www.linkedin.com/in/maykonfelixwebdeveloper)
[![GitHub](https://img.shields.io/badge/GitHub-MaykonFelix-white?style=for-the-badge&logo=github&logoColor=white&labelColor=111111)](https://github.com/MaykonFelix)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-111111?style=flat-square&logo=shadcnui&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-111111?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Sobre

Sou **Maykon Felix**, Analista de Desenvolvimento na **Tata Consultancy Services**, em Londrina (PR). Trabalho com **LLMs, RAG e agentes inteligentes** sobre uma base de Next.js, Node.js, Docker e cloud (AWS e Azure).

Este repositório é o meu portfólio: uma página única que mostra como a IA entra em um produto, do dado ao deploy.

## Destaques

| | |
|---|---|
| 🤖 **Agente sobre o currículo** | Um chat que simula um pipeline de RAG: busca trechos, ranqueia e responde mostrando as fontes. |
| 🎬 **Vídeo de apresentação** | Um tour de 30 segundos feito em HTML e renderizado como vídeo com HyperFrames. |
| 🌗 **Tema claro e escuro** | O escuro é o padrão, e a escolha fica salva no navegador. |
| 🌎 **Três idiomas** | Português, inglês e espanhol, detectados pelo idioma do navegador. |
| ✨ **Animações** | Entradas suaves com Motion e barra de progresso de rolagem. |
| 🧩 **Projetos com detalhes** | Cada projeto abre uma janela com descrição e imagens. |

## Seções

```
Hero  →  Como uso IA  →  Stack  →  Trajetória  →  Vídeo  →  Projetos  →  Contato
```

## Stack

- **Framework:** Next.js 16 (App Router) e React 19
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS 4 e shadcn/ui (sobre Base UI)
- **Animação:** Motion (`motion/react`)
- **Ícones:** lucide-react
- **Tema:** next-themes
- **Deploy:** Vercel, a cada push no `main`

## Rodando localmente

Precisa de **Node.js 24**. O app fica na subpasta `Portifolio/`.

```bash
git clone https://github.com/MaykonFelix/Portifolio.git
cd Portifolio/Portifolio
npm install
npm run dev
```

Depois abra http://localhost:3000.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (inclui checagem de tipos) |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint |

## Estrutura

```
Portifolio/
├── public/
│   ├── images/           # prints dos projetos e avatar
│   └── videos/           # vídeo de apresentação e poster
└── src/
    ├── app/              # layout, página e estilos globais
    ├── components/       # seções, chat do agente, cabeçalho, cards
    │   └── ui/           # componentes shadcn/ui
    └── lib/
        └── content.ts    # todos os textos em PT / EN / ES
```

Para mudar qualquer texto do site, edite `src/lib/content.ts`. Os três idiomas ficam lado a lado nesse arquivo.

## Contato

Quer colocar IA para trabalhar no seu produto? Me chama no [LinkedIn](https://www.linkedin.com/in/maykonfelixwebdeveloper) ou veja o site em **[maykon.xyz](https://maykon.xyz)**.

<div align="center">

<sub>Construído um tijolinho por dia. #NeverStopLearning</sub>

</div>
