<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS TypeORM Items API

A backend API built with [NestJS](https://nestjs.com/) and TypeORM for managing items, listings, and comments. This project provides a simple CRUD interface for `Item` resources, each linked to a `Listing` and a set of `Comments`.

## Features
- RESTful CRUD endpoints for items
- Each item has a listing (with description and rating)
- Each item can have multiple comments
- MySQL database connection (configurable via environment variables)

## Getting Started

```bash
yarn install
yarn start:dev
```

The server runs on `http://localhost:3000` by default.

## API Endpoints

All endpoints are prefixed with `/items`.

### Create Item
- **POST** `/items`
- **Body:**
```json
{
  "name": "Item name",
  "public": true,
  "listing": {
    "description": "Listing description"
  }
}
```
- **Response:** Created item object

### Get All Items
- **GET** `/items`
- **Response:** Array of items with listings and comments

### Get One Item
- **GET** `/items/:id`
- **Response:** Item object with listing and comments

### Update Item
- **PATCH** `/items/:id`
- **Body:**
```json
{
  "public": false,
  "comments": [
    { "content": "New comment" }
  ]
}
```
- **Response:** Updated item object

### Delete Item
- **DELETE** `/items/:id`
- **Response:** 200 OK on success

## Example Usage

#### Create an Item
```bash
curl -X POST http://localhost:3000/items \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Sample Item",
    "public": true,
    "listing": { "description": "Test listing" }
  }'
```

#### Get All Items
```bash
curl http://localhost:3000/items
```

#### Update an Item
```bash
curl -X PATCH http://localhost:3000/items/1 \
  -H 'Content-Type: application/json' \
  -d '{
    "public": false,
    "comments": [ { "content": "Updated comment" } ]
  }'
```

#### Delete an Item
```bash
curl -X DELETE http://localhost:3000/items/1
```

## Database Setup

The SQL database runs locally in a Docker container. Before starting the backend, make sure you have Docker installed and the MySQL container running.

1. Start MySQL in Docker (example):
   ```bash
   docker run --name nest-mysql -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=nestjs_db -p 3306:3306 -d mysql:8
   ```
   Adjust the password and database name as needed.

2. Create a `.env` from `.env.example` file in the project root with the following variables:
   ```env
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DATABASE=nestjs_db
   MYSQL_USERNAME=root
   MYSQL_PASSWORD=yourpassword
   MYSQL_SYNCHRONIZE=true
   ```
   Make sure these match your Docker container settings.

3. Now you can start the backend and it will connect to the local MySQL database.

## License

MIT


When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
