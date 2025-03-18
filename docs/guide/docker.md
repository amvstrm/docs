# Docker

> [!WARNING]
> amvstrm's Website will be shutting down. Read more about the future of amvstrm [here](/the-future).

> [!NOTE]
> I have no knowledge about docker, If there is anything that is incorrect, please help us rewrite the docs.

## Prerequisites

Before deploying the images, you must have the following:

- Docker installed on your system
- A Docker Hub account to access the images

## V2

> [!WARNING]
> Some configurations are needed to run both frontend and backend. Please read the [Docker Usage](https://docs.docker.com) & [Configuration guide](https://docs.amvstr.me/docs/guide/configuration) to know more.

We do not have docker for frontend and backend yet but we can provide you with the `Dockerfile` for the backend. You can use this to create your own Docker image for backend.

### Frontend

```dockerfile
# syntax=docker/dockerfile:1
FROM node:18-slim as base
ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

COPY --link package.json .
RUN npm install --production=false

COPY --link . .

# https://docs.amvstr.me/docs/guide/configuration#frontend
ENV API_URL=
ENV VERSION=v2
ENV DISQUS_ID=
ENV POSTHOG_PK=
ENV POSTHOG_HOST=https://app.posthog.com

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=80

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]
```

### Backend

You can modified the `Dockerfile` to create your image for backend. (NOT TESTED)

```dockerfile
FROM node:18-slim as builder

WORKDIR /usr/src/app
COPY . . 

# https://docs.amvstr.me/docs/guide/configuration#backend
ENV RATE_LIMIT=
ENV BLOCK_WITH_CORS=false
ENV ALLOWLIST=<your-allowed-domains / you can add multiple domains with comma>
ENV PORT=8080
ENV SENTRY_DSN_URL=<your-sentry-dsn-url / optional>

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
```

## V1

> [!WARNING]
> This version are no longer maintained. If you love the old version, this is for you...

Huge thanks to [Ve-Ka](https://github.com/Ve-Ka) for creating docker image for frontend and backend...

### Deployment Steps

- Pull the Docker images from Docker Hub:

```bash
docker pull vekaverjj/amvstrmapiv1
docker pull vekaverjj/amvstrmv1
```

- Create a `docker-compose.yml` file with the following content:

```yml
version: "3"
services:
  amvstrmapiv1:
    image: vekaverjj/amvstrmapiv1
    ports:
      - "8080:8080"
    networks:
      - amvstrm_network

  amvstrmv1:
    image: vekaverjj/amvstrmv1
    ports:
      - "3000:3000"
    networks:
      - amvstrm_network

networks:
  amvstrm_network:
```

This file defines two services, `amvstrmapiv1` and `amvstrmv1`, and a network called `amvstrm_network`. The `amvstrmapiv1` service runs the backend API on port 8080 and the `amvstrmv1` service runs the frontend on port 3000.

- Start the containers using the following command:

```bash
docker-compose up -d
```

This command starts the containers in detached mode (`-d`) and maps port 8080 on the host to port 8080 in the `amvstrmapiv1` container and port 3000 on the host to port 3000 in the `amvstrmv1` container.

- Access the frontend

You can now access the frontend by visiting `http://localhost:3000` in your web browser.

You have successfully deployed amvstrm's backend and frontend Docker images with Docker. You can now access the frontend by visiting `http://localhost:3000` and the backend API by visiting `http://localhost:8080` or sending requests to `http://localhost:8080/api`.
