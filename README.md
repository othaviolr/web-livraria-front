# 📚 Livraria do Tavin — Front-End

Interface web responsiva para a **Livraria do Tavin**, desenvolvida em React com Vite + TailwindCSS. O projeto consome uma API própria RESTful construída em .NET, exibindo livros, rankings, autores em destaque e mais.

![banner](https://via.placeholder.com/1200x400?text=Banner+da+Livraria)

---

## ✨ Funcionalidades

- 🏠 Tela Home com layout moderno e seções dinâmicas
- 🔍 Barra de pesquisa
- 📚 Exibição de livros por categoria
- 🏆 Ranking dos livros mais bem avaliados
- ✒️ Autor do Ano
- 🇰🇷 Destaque para literatura coreana
- 🌙 Visual inspirado em conceitos de Dark Romance
- 🎨 Design fiel ao protótipo no Figma

---

## 💻 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn/UI](https://ui.shadcn.com/) (em progresso)

---

## 📁 Estrutura de Pastas

```bash
src/
├── components/
│   ├── book/           # Cards e vitrines de livros
│   ├── hero/           # Seções do topo e pódio
│   ├── layout/         # Header e elementos visuais reutilizáveis
│   ├── spotlight/      # Autor do ano, Literatura Coreana
│   └── ui/             # Componentes utilitários
├── pages/              # Rotas como /livros e /ranking
├── assets/             # Imagens e ícones
└── index.css           # Estilização global
