FROM node:16-alpine

RUN npm install -g pnpm 

WORKDIR /client

COPY package.json .

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]