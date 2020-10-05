## Practica LS2 2020/21

Nom del grup:

Membres del grup:
-
-
-
-
-
-

Deploy path:
- url to heroku running


## Setup

There are two applications:

- Java Spring JPA backend (run in 8080)
- React Redux frontend (run in 3000)

The deploy merges both into one single war.

Setup Java BackEnd:

- Install Java v11

- Open the project with IntelliJ  
  (it will install all maven dependencies)

Manual Java Backend:

- Execute `./mvnw test`

Setup Javascript BackEnd:

- Install node v14 i yarn

- Execute `yarn install`

## Develop Run

- Run the com.drpicox.game.Application from intellij
- Run `yarn start` from command line
- Open the browser in `http://localhost:3000`
  (the react opens a proxy with the backend and uses actual services)


React editor:

- Recommended Visual Studio Code
- Recommended extensions:
  - EditorConfig for VS Code
  - ESLint
  - Prettier


## Run Tests

Tests must be executed always successfully in the Backend (Intellij)
and then in the Frontend.

1. Backend:
  - Execute all tests inside the package `com.drpicox.game`
  - or run `./mvnw test`

2. Frontend:
  - Run `yarn test -i --watchAll`

> **Important Note**:  
> Backend tests must run always before FrontEnd tests.
> Java uses the `target/` to store a copy of the markdowns
> and save the snapshots.  
> Any change to markdowns is not visible by the frontend
> until the backend execute them.

## Deploy on heroku

The first time:

- Create an account in Heroku 
- Create a project called `cards-game-${yourGroup}`
- Follow the instructions to use your current repository with heroku  
  (probably something like `git add remote heroku https://...` )

Each deploy:

- Be sure that you are in master and you have the latests changes
- Be sure that everything works 
- Execute `./deploy.sh` (it requires bash)
