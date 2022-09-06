FROM node:16

# Create app directory
WORKDIR /backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm i db-migrate-pg
RUN git clone https://github.com/vishnubob/wait-for-it.git
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./ ./

CMD [ "npm", "start" ]