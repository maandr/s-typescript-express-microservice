# Typescript Express Microservice Starter

This repository contains a starter project prepared and configured to use `typescript` and `express` with `routing-controllers` to develop a REST API.

[![Build Status](https://travis-ci.org/maandr/s-typescript-express-microservice.svg?branch=master)](https://travis-ci.org/maandr/s-typescript-express-microservice)
[![Coverage Status](https://coveralls.io/repos/github/maandr/s-typescript-express-microservice/badge.svg?branch=master)](https://coveralls.io/github/maandr/s-typescript-express-microservice?branch=master)

## Usage

There are several npm scripts pre-configured that can be used for convenience.

```bash
# Install project dependencies
yarn install

# Refresh dependencies (remove and re-install)
yarn refresh

# Removes all generated project files
yarn clean

# Runs the project tests
yarn test

# Runs the project tests in watch-mode
yarn test --watch

# Build the project
yarn build

# Start the project in production mode
yarn start

# Start the project in development mode
yarn start:dev
```

## Further Setup

### Code coverage

In order to send code-coverage reports after local coverage runs to [coverall.io](https://coverall.io), a `.coveralls.yml` file needs to be created within the root directory of the project. In this file the access token for the coveralls repository must be specified. The token can be obtained from [coverall.io](https://coverall.io) website.

```yml
repo_token: <your_repo_token>
```