# Habit Tracking Application

Habit Tracking Application to monitor your daily habits
and track your progress.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Developer Environment](#developer-environment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

[List the key features and functionalities of your web app.]

- Feature 1
- Feature 2
- ...

## Getting Started

Provide instructions for setting up and running your web app.

### Prerequisites
- MongoDB
- Express Js
- Node Js
- React

### Installation

1. Install docker desktop on your PC
2. Install a WSL environment on your PC
3. Clone the repository
```bash
$ git clone https://github.com/yourusername/your-web-app.git
$ cd your-web-app
$ npm install
```
### Developer Environment
To run server environment
```bash
$ docker build -t server:latest ./server
$ docker run -d -p 5000:5000 --name server server:latest
```
To run client environment 
```bash
$ docker build -t client:latest ./client
$ docker run -d -p 3000:3000 --name client client:latest
```
To run both client and server environment
```bash
$ docker-compose build
$ docker-compose up
```
To access mongodb
```bash
$ docker exec -it database mongo
```