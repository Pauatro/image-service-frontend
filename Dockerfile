FROM node:alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
ENV VITE_BACKEND_BASE_URL=http://localhost:8008
EXPOSE 5173

CMD ["npm", "run", "dev"]