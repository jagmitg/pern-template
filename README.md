<!-- LOGO -->
<img align="right" style="padding-left:2rem;background:#fff;" src="client/public/logo192.png" alt="Logo" width="110" height="110">

# PERN Template

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![License: ISC][license-shield]][license-url]

Lightweight PERN template with built-in Passport authentication.

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [PERN Template](#pern-template)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Technology Stack](#technology-stack)
    - [Directory Structure](#directory-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

This project is boilerplate code that has been built using a PERN stack (PostgreSQL, Express, React, Node) which includes Passport middleware and JWT for its authentication. The template has been written in Typescript, uses Material UI for its design system and Redux for its state management.

### Technology Stack

| Library                                              | Description                  |
| ---------------------------------------------------- | ---------------------------- |
| [PostgreSQL](https://www.postgresql.org/)            | Relational database          |
| [Express](https://expressjs.com/)                    | Web application framework    |
| [React](https://reactjs.org/)                        | Component-based UI           |
| [Node](https://nodejs.org/)                          | Server-side JavaScript       |
| [TypeScript](https://www.typescriptlang.org/)        | Typed superset of JavaScript |
| [Passport](http://www.passportjs.org/)               | Authentication middleware    |
| [JWT](https://jwt.io/)                               | Access tokens                |
| [BCrypt](https://github.com/kelektiv/node.bcrypt.js) | Hash passwords               |
| [Axios](https://github.com/axios/axios)              | HTTP client                  |
| [Redux](https://redux.js.org/)                       | State management             |
| [Material-UI](https://material-ui.com/)              | Design system                |
| [Husky](https://github.com/typicode/husky)           | Pre-commit hooks             |
| [Prettier](https://prettier.io/)                     | Auto code formatting         |

### Directory Structure

```bash
.
├── client                  #front-end
│   ├── src
│   │   ├── components      #react components
│   │   ├── config          #axios settings
│   │   ├── pages           #page level components
│   │   ├── redux           #state management
│   │   │   ├── actions     #send data to redux store
│   │   │   └── reducers    #respond to action state changes
│   │   └── utils           #utilities
│   │       └── validation  #validation utilities
│   └── public              #html template
│
└── server                  #back-end
    ├── src
    │   ├── config          #db and passport settings
    │   ├── controllers     #interface between routes and db
    │   ├── middleware      #authorise protected requests
    │   ├── models          #db queries
    │   └── routes          #express api routes
    └── .env                #server config file
```

<!-- GETTING STARTED -->

## Getting Started

To get this project up and running, ensure the prerequisites have been met and then follow the installation steps below.

### Prerequisites

- Node
- NPM
- PostgresSQL

Once PostgreSQL has been installed, create a new database with a `users` table:

```sql
CREATE DATABASE pern_template;
```

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL
);
```

### Installation

1. Clone repository

```sh
git clone https://github.com/t-blackwell/pern-template.git
```

2. Install node modules in root, client and server directories

```sh
npm install
```

3. Add configuration file `.env` to server directory

```
NODE_ENV=development
PORT=5000
ACCESS_TOKEN_SECRET=secret_one
REFRESH_TOKEN_SECRET=secret_two
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=password
PGDATABASE=pern_template
PGPORT=5432
```

4. Reinitialise Git

```sh
rm -rf .git
git init
```

5. Fire it up

```sh
npm run dev
```

<!-- CONTRIBUTING -->

## Contributing

Contributions to this project are welcome and appreciated.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a pull request

<!-- LICENSE -->

## License

Distributed under the [ISC License](https://opensource.org/licenses/ISC).

<!-- CONTACT -->

## Contact

Any questions, suggestions or contribution ideas, please feel free to send me an [email](mailto:tlb.blackwell@gmail.com).<br />- Tom

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

This template was originally built using the [pern-stack-typescript](https://github.com/gandh99/pern-stack-typescript) repo, special thanks to [gandh99](https://github.com/gandh99) for his help.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/t-blackwell/pern-template
[contributors-url]: https://github.com/t-blackwell/pern-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/t-blackwell/pern-template
[forks-url]: https://github.com/t-blackwell/pern-template/network/members
[stars-shield]: https://img.shields.io/github/stars/t-blackwell/pern-template
[stars-url]: https://github.com/t-blackwell/pern-template/stargazers
[license-shield]: https://img.shields.io/badge/License-ISC-blue
[license-url]: https://opensource.org/licenses/ISC
[product-screenshot]: home.png
