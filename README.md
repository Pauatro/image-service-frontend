# Translation Service UI

This is the UI of the image service. It uses React+Typescript, Vite and Tailwind.

## Initializing the project

Since the package manager used is NPM, you need to run the following commands:

1. install dependencies
```
  npm install
```

2. Initialize project:
```
  npm run dev
```

## Running the Dockerized version

Everything is set up to run the app using docker and docker-compose.
Since there's two separate repos (frontend and backend), the image for the frontend needs to be generated first. To do that, run the following command in the root folder of this project:

```
docker build . -t image-service-frontend
```

Then you can just run the docker compose in the backend project to have everything up and running:

```
docker compose up -d
```