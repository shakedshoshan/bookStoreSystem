# FROM node:20

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 5555

# CMD ["npm", "start"]

FROM node:20

WORKDIR /app

ENV PATH /usr/local/bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5555

CMD ["npm", "start"]