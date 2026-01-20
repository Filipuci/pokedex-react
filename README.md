<p align="center">
    <h1 align="center"><code>Pokedex React</code></h1>
</p>

<p align="center">
    <em>
        Uma Pokédex moderna construída com React e TypeScript, consumindo a PokeAPI.
        O projeto foca em componentização, tipagem forte, reutilização de código e escalabilidade,
        representando uma evolução direta de uma implementação anterior feita com JavaScript puro.
    </em>
</p>

<p align="center">
    <em>Construído com as seguintes ferramentas e tecnologias:</em>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios">
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat-square&logo=TailwindCSS&logoColor=white" alt="TailwindCSS">
</p>

<br>

<img width="1895" height="1046" alt="image" src="https://github.com/user-attachments/assets/8a043c25-0cf5-4b71-a0b6-1bf3218c3a74" />

<br> <br>

<details>
<summary>Sumário</summary>

- [📍 Visão Geral](#-visão-geral)
- [🎯 Funcionalidades](#-funcionalidades)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como Executar](#-como-executar)
- [🧩 Decisões Técnicas](#-decisões-técnicas)
- [📚 O que Aprendi](#-o-que-aprendi)
- [📌 Possíveis Evoluções](#-possíveis-evoluções)

</details>

<hr>

## 📍 Visão Geral

Esta Pokédex foi desenvolvida como uma evolução direta de um projeto anterior que consumia a PokeAPI utilizando `fetch` e JavaScript puro.

Nesta versão, o foco foi elevar o nível técnico do projeto, adotando **React**, **TypeScript** e **Axios**, além de uma abordagem mais estruturada e escalável baseada em **componentização**, **tipagem forte** e **reutilização de código**.

O aumento na verbosidade do código é intencional e reflete decisões arquiteturais voltadas à manutenibilidade e crescimento do projeto.

---

## 🎯 Funcionalidades

- Listagem dos 151 Pokémons da primeira geração
- Consumo da PokeAPI utilizando Axios
- Renderização dinâmica de cards através de `map`
- Card individual reutilizável para cada Pokémon
- Exibição de:
  - Imagem oficial
  - Número formatado (padding)
  - Nome com capitalização automática
  - Tipos do Pokémon com cores dinâmicas
- Efeitos de hover:
  - Escala da imagem
  - Alteração de cores dos tipos
  - Mudança dinâmica da cor do nome conforme o tipo principal

---

## 📂 Estrutura do Projeto

```sh
└── src
    ├── components
    │   └── Cards
    │       └── Card.tsx
    ├── services
    │   └── api.ts
    ├── types
    │   └── types.ts
    ├── utils
    │   ├── capitalization.ts
    │   └── padding.ts
    ├── App.tsx
    └── main.tsx
```

## ⚙️ Tecnologias Utilizadas

- **React** – Construção da interface baseada em componentes  
- **TypeScript** – Tipagem estática para maior segurança e previsibilidade  
- **Axios** – Cliente HTTP para consumo da PokeAPI  
- **TailwindCSS** – Estilização utilitária com foco em produtividade  
- **PokeAPI** – Fonte de dados dos Pokémons  

---

## 🚀 Como Executar

Clone o repositório:

```bash
git clone https://github.com/Filipuci/pokedex-react.git
```

Acesse a pasta do projeto:
```bash
cd pokedex-react
```

Instale as dependências
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🧩 Decisões Técnicas

- **Axios** foi escolhido em vez de `fetch` para melhorar legibilidade, tratamento de erros e escalabilidade.

- **TypeScript** foi utilizado para:
  - Tipar respostas da API
  - Garantir contratos claros entre componentes
  - Evitar erros comuns de runtime

- **Componentização**:
  - Existe um único componente de Card reutilizável
  - A renderização ocorre via `map`, tornando a solução escalável

- **Separação de responsabilidades**:
  - services (API)
  - types
  - utilitys
  - components

---

## 📚 O que Aprendi

- Diferenças práticas entre `fetch` e Axios
- Tipagem de respostas de APIs externas com TypeScript
- Organização de um projeto React de forma escalável
- Criação de componentes reutilizáveis
- Gerenciamento de estado com `useState` e `useEffect`
- Limitações do TailwindCSS com classes dinâmicas e como contorná-las corretamente
- Importância de separar lógica, visual e utilidades

---

## 📌 Possíveis Evoluções

- [ ] Implementar busca por nome
- [ ] Filtros por tipo
- [ ] Loading da página com Context
- [ ] Modal com detalhes do Pokémon
- [ ] Versão mobile-first

---

> Este projeto representa um marco pessoal de evolução técnica, consolidando a transição de JavaScript puro para uma arquitetura moderna baseada em React e TypeScript.

