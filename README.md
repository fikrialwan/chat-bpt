# CHAT BPT

Chat bot that you can ask everything about program Yayasan Amaliah Astra or Astra Gema Islami

## Setup

### Dependencies

Use [pnpm](https://pnpm.io) to improve productivity and replace npm, so make
sure [pnpm is installed](https://pnpm.io/installation#using-npm):

```sh
npm i -g pnpm
```

To run the app locally, make sure the project's local dependencies are
installed:

```sh
pnpm install
```

### Environment Variables

Create the `.env` file from `.env.example`. This is the one for local
development, not production

```sh
cp -i .env.example .env
```

Configure the required environment variables if on local, otherwise in the
project settings on other environments.

Required:

- `VITE_BASE_URL`: For example, `https://chatapi.id`

Optional:
- `VITE_LOGIN_FLAG`: Set to `false` if you want to hide login page

### Development

Finally, develop the app while running the development server:

```sh
pnpm dev
```

Open <http://localhost:5173> and it's ready!

### Build

Check if the build is fine. This als be used to build the app for production.

```sh
pnpm build
```

After that you can run the build result:

```sh
pnpm preview
```

Open <http://localhost:4173> and it's ready!


or if you have docker you can instantly use this command:

```sh
docker compose up -d
```

Grab a coffee, it will automatically build and run on <http://localhost:5002>

## Tech Stack 

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Docker](https://docker.com) and [Docker Compose](https://docs.docker.com/compose)
