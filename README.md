# Pokédex

Uma Pokédex moderna desenvolvida com React que consome a PokeAPI para exibir dados de Pokémon com paginação e otimização de requisições.

---

## Features

- Consumo de dados da PokeAPI
- Paginação com botão "Carregar mais"
- Cache automático e otimização de requisições
- Cards dinâmicos com informações dos Pokémon (sprite, type, id)

---

## Technologies

- React (Vite)
- TanStack Query (React Query)
- Axios
- TypeScript
- TailwindCSS

---

## Como funciona

A aplicação é estruturada em duas queries principais:

### 1. Query de Lista de Pokémon
Responsável por buscar uma lista paginada com dados básicos:
- `name`
- `url`

### 2. Query de Detalhes do Pokémon
Responsável por buscar os dados completos de cada Pokémon:
- sprite
- id
- tipos
- outros atributos

---

## Fluxo de Dados

1. O componente principal (`App`) busca a lista de Pokémon
2. Os nomes são armazenados e renderizados com um `map`
3. Cada nome é passado para um componente `Card`
4. Dentro do `Card`, uma segunda query busca os detalhes do Pokémon
5. A interface é construída com base nesses dados

---

## Paginação (Load More)

- Inicialmente são carregados 12 Pokémons
- Um botão "Carregar mais" atualiza o `offset`
- O `offset` faz parte da `queryKey`
- Ao mudar, o TanStack Query realiza uma nova requisição automaticamente
- Os novos dados são adicionados à lista existente

---

## Performance

- Cache automático com TanStack Query
- Evita requisições desnecessárias
- Melhora a performance e experiência do usuário

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/Filipuci/pokedex.git

# Acesse a pasta
cd pokedex

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

## Melhorias futuras
- Implementar busca por nome
- Filtro por tipo de Pokémon
- Sistema de favoritos (usando mutations)
- Infinite Scrolls
- Melhorar gerenciamento global de estado
- Modal com mais detalhes de cada pokemon (atributos, etc)
- Refatoração
