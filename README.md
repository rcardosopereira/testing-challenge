<h1 align="center"> Github User Search </h1> <br>

<div align="center">
<img src="./src/assets/github/github-search-user.png" />
</div>

## Introduction

This is a basic project that search for a user on github and then returns a few of the user data and it's repositories's names and descriptions.

## Demo

https://user-images.githubusercontent.com/56850413/165952437-1cba04ef-4b68-4f3c-86aa-c69f70086a2d.mp4

## How to get up and running

Clone or download the repo

- `yarn` to install dependencies
- `yarn dev` to run the project in development mode

## Install and run the server

- `npm install -g yarn`
- `yarn`
- `npm init`
- `yarn add cypress --dev`
- `yarn dev`

## Run the tests

- `npm run test`

## To open the Cypress and run the tests separately, run:

- `npm run cypress:open`

## To run the test in the Docker, please run the command below:

- `docker run -it usersearch`

## Versions

- yarn version: 1.22.21
- npm version: 10.2.3

## Videos

- cypress\videos

## How to commit into this repo?

- `git commit` since this repo uses husky and cli commitlint, a frindly cli will appear to help you commit a clear message

## Disclaimer

The github api is public and it has a limit of 60 request for a unauthenticated user
