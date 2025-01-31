# Microservices-Based Ticketing Platform

## Overview

A scalable event-ticketing platform built with **microservices** to handle ticket creation, ordering, payments, and expiration. Built with Node.js, Docker/Kubernetes, and event-driven architecture (NATS Streaming), it ensures real-time communication between services like Auth, Orders, and Payments. Features include Stripe payments, JWT authentication, and a Next.js/React frontend with server-side rendering (SSR)

## Key Features

- **Frontend**: Next.js/React with SSR for optimized performance. TypeScript for type safety; dynamic routing and client-side hooks (useRequest) for API interaction.

- **Backend & Database**: Node.js/Express microservices (Auth, Orders, Payments, Posts) with TypeScript. MongoDB for data storage; Mongoose models with optimistic concurrency control (OCC) to resolve race conditions.
- **Event-Driven**: NATS Streaming for async communication between services. Publishers/Listeners with queue groups, manual ACKs, and event versioning for concurrency. Redis/Bull for delayed job processing (e.g., order expiration).
- **DevOps & Deployment**: Docker containerization and Kubernetes orchestration (Pods, Deployments, Services). Skaffold for development workflows; Ingress-Nginx for routing and Secrets for secure key storage. GitHub Actions CI/CD for automated testing.
- **Testing**: Jest unit/integration tests for services, and listeners/publishers; automated with GitHub Actions CI/CD.

- **Security & Integrations**: JWT/cookie-based auth with Kubernetes Secrets for secure token storage. Stripe API for payment; test workflows with mock credit cards.

## TODO

- [ ] deployment
