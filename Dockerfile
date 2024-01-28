FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]