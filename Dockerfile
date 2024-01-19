FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

CMD ["pnpm", "preview", "--host"]