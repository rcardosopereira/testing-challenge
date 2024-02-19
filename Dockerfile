FROM cypress/factory

RUN npm install -g yarn

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

CMD ["yarn", "cy:run"]