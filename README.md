<div align="center">

# Lutz's Portfolio

![](https://img.shields.io/badge/Versão-0.1.0-blue.svg)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.1-black.svg?logo=next.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-18.3.0-blue.svg?logo=react&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue.svg?logo=typescript&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC.svg?logo=tailwind-css&logoColor=white)](#)

Portfolio pessoal desenvolvido com Next.js que apresenta projetos, habilidades e experiências através de posts em Markdown.

</div>

- [Instalação](#instalação)
  - [Detalhes](#detalhes)
  - [Dependências](#dependências)
  - [Executando](#executando)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)

## Detalhes

- **Porta**: 3000 (desenvolvimento)
- **Framework**: Next.js 14 com App Router
- **Estilização**: Tailwind CSS com tema escuro
- **Componentes**: shadcn/ui para interface moderna
- **Markdown**: Processamento de posts com markdown-it e highlight.js
- **Tipografia**: Fonte Ubuntu personalizada
- **Ícones**: Lucide React para ícones modernos

## Instalação

### Dependências

Demais dependências podem ser encontradas no arquivo `package.json`

| Dependência | Versão | Link                                          |
| ----------- | ------ | --------------------------------------------- |
| Next.js     | 14.2.1 | [Next.js](https://nextjs.org/)                |
| React       | 18.3.0 | [React](https://react.dev/)                   |
| TypeScript  | 5.4.2  | [TypeScript](https://www.typescriptlang.org/) |
| Node.js     | 18+    | [Node.js](https://nodejs.org/en/)             |

### Executando

1. Clonar este repositório:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Instalar as dependências:

   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   ```

3. Executar o projeto:

   **Ambiente de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   pnpm dev
   # ou
   yarn dev
   ```

   **Build para produção:**

   ```bash
   npm run build
   npm run start
   ```

## Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── project/          # Componentes específicos de projetos
│   ├── ui/               # Componentes de interface (shadcn/ui)
│   └── terminal.tsx      # Componente de terminal animado
├── lib/                  # Utilitários e configurações
├── styles/               # Estilos globais e CSS
└── utils/                # Funções utilitárias
    ├── markdown-it.ts    # Configuração do processador Markdown
    └── projects.ts       # Lógica de gerenciamento de projetos

public/
├── assets/               # Recursos estáticos (imagens, ícones, fontes)
└── projects/
    └── details/          # Posts em Markdown dos projetos
```

## Funcionalidades

- **Interface Moderna**: Design responsivo com tema escuro e animações suaves
- **Posts em Markdown**: Sistema de blog com processamento de Markdown
- **Sintaxe Highlighting**: Destaque de código com highlight.js
- **Componentes Reutilizáveis**: Interface construída com shadcn/ui
- **Terminal Animado**: Elementos visuais inspirados em terminal
- **Tipografia Personalizada**: Fonte Ubuntu para melhor legibilidade
- **SEO Otimizado**: Metadados configurados para melhor indexação

### Adicionando Novos Projetos

Para adicionar um novo projeto ao portfolio:

1. Crie um arquivo `.md` na pasta `public/projects/details/`
2. O arquivo será automaticamente processado e exibido na interface
3. Use Markdown com suporte a sintaxe highlighting para código

## Licença

```text
Copyright (C) Lutz - All Rights Reserved
Unauthorized copying of this file or files in this project, via any medium is strictly prohibited
Proprietary and confidential
Written by Lutz, 2024
```

Desenvolvido por [Lutz](https://github.com/gelutz)
