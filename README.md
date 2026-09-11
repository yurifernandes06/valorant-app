# 🎯 Valorant App

A web app built with **Next.js**, **React** and **TypeScript**, consuming the public Valorant API to display information about agents, maps and skins.

🔗 **Demo:** [valorant-app-chi.vercel.app](https://valorant-app-chi.vercel.app)

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

## 🛠️ Tech stack

- **[Next.js](https://nextjs.org/)** — React framework with server-side rendering and static site generation
- **[React](https://react.dev/)** — library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** — JavaScript superset with static typing
- **[pnpm](https://pnpm.io/)** — package manager
- **[Valorant API](https://valorant-api.com/)** — data on agents, maps and skins
- **[Vercel](https://vercel.com/)** — deployment

## ✨ Features

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page featuring the characters |
| Agents | `/agents` | Information about Valorant's agents |
| Maps | `/maps` | Details about the game's maps |
| Skins | `/skins` | Weapon skins |

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (recommended via [asdf](https://asdf-vm.com/))
- [pnpm](https://pnpm.io/) installed globally

### Setup

```bash
# Clone the repository
git clone https://github.com/yurifernandes06/valorant-app.git
cd valorant-app

# Install dependencies
pnpm install
```

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_API_URL=https://dash.valorant-api.com/
```

```bash
# Start the development server
pnpm dev
```

The app will be available at `http://localhost:3000`.

To run the tests:

```bash
pnpm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a branch for your feature (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -m "Description of changes"`)
4. Push to the repository (`git push origin my-new-feature`)
5. Open a Pull Request

## 📚 Additional resources

- [Valorant API documentation](https://valorant-api.com/)
- [Next.js documentation](https://nextjs.org/docs)
- [React documentation](https://react.dev/)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
