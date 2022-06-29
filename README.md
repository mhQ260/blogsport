# Blogsport Application

#### Education app written in Vue3, TypeScript, Sass by Mateusz Hudzik

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)

## Features
- Creating and managing posts
- Creating comments

## Installation

### Backend

First make sure that you have django set up. If not, go to the documentation [@django docs](https://docs.djangoproject.com/en/4.0/topics/install/)

For run the server, you should run a simple script:

```
py manage.py runserver
```

### Frontend

Firstly, it would be nice to have all npm packages installed, so in order to do so, ensure that you are in the directory `frontend` and then execute:
```
npm install
```

Then you should create an .env file and declare variables in it:
```
VUE_APP_API='http:/xxx',
VITE_APP_PORT=xxx
```

## License
```
MIT
```

## Contact
Created by [@Mateusz Hudzik](https://github.com/mhQ260)