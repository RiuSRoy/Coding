# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a collection of machine coding practice projects and interview question implementations. Each subdirectory is a standalone project implementing a specific system design or coding challenge.

## Project Categories

### TypeScript Projects (Machine Coding)
Most TypeScript projects follow the same build pattern:
- **Build**: `npm run build` (compiles TypeScript to JavaScript in `dist/`)
- **Run**: `npm start` (runs compiled code from `dist/`)
- **Source code**: Located in `src/` directory
- **Entry points**: Typically `app.ts` or `driver.ts`

Key projects:
- **chess/**: Chess game implementation with game controller
- **trello/**: Trello-like board management system with boards, lists, and cards
- **uber/**: Ride-sharing system with driver and user management
- **vending-machine/**: Vending machine using State Design pattern
- **flipmed/**: Practo-like healthcare booking system (Flipkart SDE2 interview question)
- **gokwik/**: Payment gateway implementation
- **ola/**: Another ride-sharing implementation
- **redis/**: Redis client/usage examples
- **email-marketing/**: Email campaign management system
- **urban_company/**: Service marketplace implementation

### Go Projects
- **microservice-go/**:
  - Build: `make build` (outputs to `bin/fact`)
  - Run: `make run`
  - Test: `make test`
  - Demonstrates service pattern with logging decorator
  - Fetches cat facts from external API

- **go-websocket/**: WebSocket server implementation
- **bloom-filter-go/**: Bloom filter data structure implementation

### Python Projects
- **stock-exchange/**: Stock exchange matching engine
  - Located in `stock-exchange/version1/`
  - Uses Docker Compose with Redis for order matching
  - Start: `docker-compose up --build` (run from version1/)
  - Restart matching engine: `docker-compose restart matching_engine`
  - Access Redis: `docker exec -it stock_exchange_redis redis-cli`
  - Architecture:
    - `services/matching_engine/`: Core order matching logic
    - `shared/`: Shared models and config
    - `frontend/`: Frontend interface
  - Redis data structures:
    - Orders stored as hashes: `HGETALL order:<order_id>`
    - Asks/bids in sorted sets: `ZRANGE asks 0 -1 WITHSCORES`
    - Events in streams: `XRANGE events - +`

### Node.js Projects (Plain JS)
- **kafka-app/**: Kafka producer/consumer implementation
  - Files: `admin.js`, `producer.js`, `consumer.js`, `client.js`
  - Requires Zookeeper and Kafka running in Docker (see README.md)
  - Run admin setup: `npx ts-node admin.ts`

- **websocket-demo/**: WebSocket server demonstration
  - Test with browser console: `let ws = new WebSocket("ws://localhost:8080")`

- **sse/**: Server-Sent Events implementation
- **kafka/**: Another Kafka implementation

### Standalone Files
- **riu.cpp**: C++ implementation (competitive programming or algorithm)
- **riu.py**: Python script

## Common Patterns

### TypeScript Project Architecture
TypeScript projects typically use MVC-like patterns:
- `controller/`: Business logic and orchestration
- `models/`: Data models and types
- `service/`: External service integrations or business services
- `manager/`: State management and data storage
- `utils/`: Utility functions

### Machine Coding Approach
Projects focus on object-oriented design patterns commonly asked in interviews:
- State pattern (vending-machine)
- Controller pattern (most TS projects)
- Service/Repository pattern (Go microservice)
- Event-driven architecture (stock-exchange)

## Development Workflow

When working on TypeScript projects:
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Run: `npm start`

When working on Go projects:
1. Use Makefile targets: `make build`, `make run`, `make test`

When working on Docker-based projects:
1. Check for `docker-compose.yml`
2. Use `docker-compose up --build` to start
3. Access services via `docker exec -it <container_name> <command>`

## Testing
Most projects don't have comprehensive test suites (practice/interview code). When tests exist:
- Go: `make test` or `go test -v ./...`
- TypeScript: Check `package.json` scripts
