# Pokédex App 📱

A simple mobile app built with **Expo** and **React Native** to learn the basics of mobile development and API integration.

## What it does

Fetches and displays a list of Pokémon from the [PokéAPI](https://pokeapi.co/), showing each Pokémon's name, type, and sprites — color coded by type.

## Built with

- [Expo](https://expo.dev/) + Expo Router
- React Native
- TypeScript
- Axios

## What I learned

- Setting up an Expo project from scratch
- Fetching data with Axios using `async/await` and `try/catch`
- Using `Promise.all` to fetch multiple API endpoints in parallel
- Typing API responses with TypeScript interfaces
- Rendering lists with `ScrollView` and `.map()`
- Basic React Native styling with `StyleSheet`

## Running locally

```bash
bun install
bun run start
```

Scan the QR code with **Expo Go** on your phone.

## API

Uses the free [PokéAPI](https://pokeapi.co/) — no auth required.

- List endpoint: `GET https://pokeapi.co/api/v2/pokemon/?limit=20`
- Detail endpoint: `GET https://pokeapi.co/api/v2/pokemon/{name}`
