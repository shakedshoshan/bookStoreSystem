# FROM node:18-alpine

# WORKDIR /src

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 4173

# CMD ["npm", "run", "start"]


FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]


