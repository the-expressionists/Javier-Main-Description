<center>
  <img src="./client/dist/logo.png" alt="drawing" height="200" width="400" />
</center>

# JTWENL

JTWENL is a site for purchasing home furniture, decor and outdoor goods. This project was created by [Joseph Toney](https://github.com/wumbabum). I took over the project to scale the backend to support over 10 million products and support over 2000rps. This was deployed on an AWS EC2 instance and stress tested with [new relic](https://newrelic.com/) and [k6](https://k6.io/). This is the main product description comprised of product images, breadcrumb of links to current page, product description and a series of related categories and product suggestions. This is 1 of 3 microservice that were feed throught a proxy. Site was developed with PERN Stack ([PostgreSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node](https://nodejs.org/en/)).

## Requirements

- [Node](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresqltutorial.com/install-postgresql/)

## Quick Start

```
$ npm install
```

## Run the server

```
$ npm run sdc-start
```

## Seed the service

_If this is your first time running the server, seed the database with sample data:_

> _database is running on PostgreSQL installed_

Create tables in database

```
$ npm run config
```

Generate data on CSV files

```
$ npm run write-csv
```

Seed Database

```
$ npm run sdc-seed
```
