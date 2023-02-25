FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

ENV PORT=8080

ENV NODE_OPTIONS="--openssl-legacy-provider"

EXPOSE 8080

CMD [ "npm", "start" ]

