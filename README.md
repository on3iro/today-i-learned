# today-i-learned


<!-- vim-markdown-toc GFM -->

* [Installing](#installing)
* [Running the backend API](#running-the-backend-api)
* [Runnint the fronted](#runnint-the-fronted)

<!-- vim-markdown-toc -->


## Installing

As this is currently just a prototype there are no convenience scripts
for installing and starting both the backend API as well as the frontend.
Please follow these steps to get up and running:

Clone the repository

```bash
git clone git@github.com:on3iro/today-i-learned.git
```

Now move into the cloned repository and install all backend dependencies by running

```bash
npm i
```

To install the client frontend `cd` into the `public/` directory and run `npm i` again.


## Running the backend API

After installing all dependencies just move into the top-level  directory of the
application and run

```bash
npm start
```

This will start the backend server and expose its API on `localhost:8080`


## Runnint the fronted

Make sure that you already are inside the `public/` directory.
Now just run

```bash
npm start
```

This will start an instance of a webpack-dev-server. The client is now
available on `localhost:3000`.
