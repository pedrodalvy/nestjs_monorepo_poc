# NestJS Monorepo PoC

This is a proof-of-concept project built with NestJS to demonstrate the monorepo structure.
It consists of two applications, `app-one` and `app-two`, each running on a different port.
The `app-one` listens on port **3001**, while `app-two` listens on port **3002**.
Both applications have a root route that returns a message: "App One Works!" and "App Two Works!" respectively.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
cd nestjs_monorepo_poc
```

2. Install dependencies:

```bash
npm install
```

## Usage

### App One

To run `app-one`, use the following commands:

- Build the application:

```bash
npm run app-one:build
```

- Start the development server:

```bash
npm run app-one:start
```

This will start `app-one` on port **3001**.

### App Two

To run `app-two`, use the following commands:

- Build the application:

```bash
npm run app-two:build
```

- Start the development server:

```bash
npm run app-two:start
```

This will start `app-two` on port **3002**.

## Testing

This project utilizes Jest for testing. To run the tests, use the following command:

```bash
npm run test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To generate a code coverage report:

```bash
npm run test:cov
```

Additionally, each application has its own e2e test configuration:

- `app-one` E2E tests:

```bash
npm run app-one:test:e2e
```

- `app-two` E2E tests:

```bash
npm run app-two:test:e2e
```

## License

This project is not licensed and is for demonstration purposes only.
