---
title: 'Pictophone'
date: '2020-05-01'
images: 
  [
    '/images/pictophone/pt-home.png',
    '/images/pictophone/pt-lobby.png',
    '/images/pictophone/pt-choose-word.png',
    '/images/pictophone/pt-draw-ready.png',
    '/images/pictophone/pt-draw.png',
    '/images/pictophone/pt-guess-ready.png',
    '/images/pictophone/pt-guess.png',
    '/images/pictophone/pt-replay.png',
  ]
description: 'A multiplayer drawing game!'
---

**Pictophone** is a multiplayer game, much like a combination between Pictionary and Telephone, in which players alternate drawing a word or phrase, guessing what the previous player drew, and then drawing the guess from the previous player. At the end, you see the evolution of everyone's wacky drawings and (mis)interpretations. It's basically a copy of Telestrations, a great party game that my friends and I like to play.

[Play it here!](https://pictophone.now.sh)

It's best with 4+ players, but even a single player can play the game and make drawings. It also works on touch devices.

Pictophone uses socket.io for a real-time connection between clients and server to handle data in a room of players.  Drawing is handled with the HTML5 canvas element, and the app takes advantage of the `requestAnimationFrame()` API to smoothly and performantly draw.  The front-end interface is built in React and bootstrapped by Create-React-App, and Storybook provides visual testing of components during development.  The server logic handles player connections, organizes players into game rooms, executes the game by handling timers and phases, and appropriately shuffles around data between players to pass words and drawings between them.

[View the client source on GitHub](https://github.com/KaiVandivier/pictophone-client)

[View the server source on GitHub](https://github.com/KaiVandivier/pictophone-server)