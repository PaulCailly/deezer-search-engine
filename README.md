# Deezer Search Engine

Deezer Search Engine is a simple web-app built on React and Node.js that provide a simple interface to browse Deezer catalogue. Results are enriched with artists biography from Last.fm API.

![App showcase](https://media.giphy.com/media/LM9Brpsu2WUqBDx7gn/giphy.gif)

## Quick Overview

A docker-compose is provided to start the app quickly.

```
cd deezer-search-engine
docker-compose up --build
```

## Tests

### Client

```
cd deezer-search-engine/client
npm run test
```

### Server

```
cd deezer-search-engine/server
npm run test
```

## Built with

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Material-UI](https://material-ui.com/)
- [DevExtreme React Grid](https://github.com/DevExpress/devextreme-reactive)
- [Deezer API](https://developers.deezer.com/api)
- [Last.fm API](https://www.last.fm/api)
