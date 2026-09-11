# 🎯 Valorant App

Aplicativo web desenvolvido com **Next.js**, **React** e **TypeScript**, que consome a API pública do Valorant para exibir informações sobre agentes, mapas e skins do jogo.

🔗 **Demo:** [valorant-app-chi.vercel.app](https://valorant-app-chi.vercel.app)

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

## 🛠️ Tecnologias utilizadas

- **[Next.js](https://nextjs.org/)** — framework React com renderização no servidor e geração de sites estáticos
- **[React](https://react.dev/)** — biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** — superset do JavaScript com tipagem estática
- **[pnpm](https://pnpm.io/)** — gerenciador de pacotes
- **[Valorant API](https://valorant-api.com/)** — dados sobre agentes, mapas e skins
- **[Vercel](https://vercel.com/)** — deploy da aplicação

## ✨ Funcionalidades

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Página inicial com destaque dos personagens |
| Agents | `/agents` | Informações sobre os agentes do Valorant |
| Maps | `/maps` | Detalhes sobre os mapas do jogo |
| Skins | `/skins` | Skins das armas |

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado via [asdf](https://asdf-vm.com/))
- [pnpm](https://pnpm.io/) instalado globalmente

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/yurifernandes06/valorant-app.git
cd valorant-app

# Instale as dependências
pnpm install
```

Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_API_URL=https://dash.valorant-api.com/
```

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`.

Para rodar os testes:

```bash
pnpm test
```

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b minha-nova-feature`)
3. Faça commit das suas alterações (`git commit -m "Descrição das alterações"`)
4. Envie para o repositório (`git push origin minha-nova-feature`)
5. Abra um Pull Request

## 📚 Recursos adicionais

- [Documentação da API do Valorant](https://valorant-api.com/)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do React](https://react.dev/)

## 📄 Licença

Este projeto é licenciado sob a [MIT License](./LICENSE).
