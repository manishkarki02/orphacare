# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.18.0
ARG PNPM_VERSION=10.20.0


# ==================================================
# Build
# ==================================================
FROM node:${NODE_VERSION}-alpine AS build

ARG PNPM_VERSION
ARG VITE_API_BASE_URL

ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
ENV VITE_API_BASE_URL="${VITE_API_BASE_URL}"

WORKDIR /app

RUN corepack enable \
    && corepack prepare pnpm@${PNPM_VERSION} --activate

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=frontend-pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm build


# ==================================================
# Production
# ==================================================
FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
