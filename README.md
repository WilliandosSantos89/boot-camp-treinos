# 🏋️ FIT.AI — Sistema de Gestão de Treinos

> Aplicação fullstack completa para criação e gerenciamento de treinos personalizados com auxílio de Inteligência Artificial integrada.

---

## 📱 Sobre o Projeto

O **FIT.AI** é um sistema de gestão de treinos desenvolvido durante o **Bootcamp Fullstack do Full Stack Club**. A aplicação permite que o usuário monte seu plano de treino personalizado, acompanhe sua evolução com estatísticas detalhadas e conte com um Coach de IA disponível 24h para guiá-lo em cada exercício.

---

## 🚀 Tecnologias

### Back-End
- **TypeScript** — Tipagem estática para um código mais seguro e confiável
- **Node.js** — Ambiente de execução JavaScript no servidor
- **Fastify** — Framework web rápido e eficiente

### Front-End
- **Next.js** — Framework React com renderização híbrida
- **Tailwind CSS** — Estilização utilitária e responsiva
- **Shadcn/UI** — Componentes acessíveis e customizáveis

### Banco de Dados & Infra
- **Prisma ORM** — Mapeamento objeto-relacional moderno
- **PostgreSQL** — Banco de dados relacional robusto

### Qualidade de Código
- **ESLint** — Análise estática e padronização do código
- **Husky** — Hooks de Git para garantir qualidade antes de cada commit
- **pnpm** — Gerenciador de pacotes rápido e eficiente

---

## ✨ Funcionalidades

- [x] Estrutura inicial do projeto
- [ ] Autenticação de usuários
- [ ] Criação de planos de treino personalizados
- [ ] Gerenciamento de dias e exercícios
- [ ] Registro de sessões de treino
- [ ] Dashboard com histórico e estatísticas
- [ ] Coach IA integrado

---

## 🗂️ Estrutura do Banco de Dados

O projeto utiliza as seguintes entidades principais:

- **User** — Dados do usuário autenticado
- **WorkoutPlan** — Planos de treino do usuário
- **WorkoutDay** — Dias de treino dentro de cada plano
- **WorkoutExercise** — Exercícios de cada dia (séries, repetições, descanso)
- **UserWorkoutSession** — Histórico real de treinos realizados

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/)
- [NVM](https://github.com/coreybutler/nvm-windows) (recomendado)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/WilliandosSantos89/boot-camp-treinos.git

# Entre na pasta do projeto
cd boot-camp-treinos

# Instale as dependências
pnpm install
```

### Rodando o projeto

```bash
# Em breve...
pnpm dev
```

---

## 📝 Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

| Prefixo | Uso |
|---------|-----|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `chore` | Configuração e dependências |
| `docs` | Documentação |
| `refactor` | Refatoração de código |
| `style` | Formatação |
| `test` | Testes |

---

## 👨‍💻 Autor

Feito com 💪 por **Willian dos Santos**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/willian-dos-santos)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/WilliandosSantos89)

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).