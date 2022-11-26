# Anilist Wrapper

An UNOFFICIAL wrapper for the anilist api written in typescript that tries to follow the [builder pattern](https://refactoring.guru/design-patterns/builder) to give a more consised inteface to create objects.

## Table of Contents

- [Anilist Wrapper](#anilist-wrapper)
  - [Table of Contents](#table-of-contents)
  - [Status](#status)
  - [Instalation](#instalation)
  - [Usage](#usage)
    - [Creating a query](#creating-a-query)
    - [Media query arguments](#media-query-arguments)
    - [Creating the query](#creating-the-query)
      - [Media Query](#media-query)
        - [Fetching without building the query](#fetching-without-building-the-query)
        - [Creating a complete search query](#creating-a-complete-search-query)

## Status

To see the current status of the wrapper check the [todo](TODO.md) list.

## Instalation

```sh
npm i anilist
```

## Usage

### Creating a query

The exported `Anilist` object gives you 2 ways of creating a query, either by calling `query.<type>()` or `<type>Query()`.

```ts
const query = Anilist.mediaQuery();
```
```ts
const query = Anilist.query.media();
```

I will be using `query.<type>()` for the examples moving forward

### Media query arguments

The media query can accept either an object of `MediaArguments` or a string.

If you pass in a string it will be transformed into `{ search: string }` internally.

```ts
const queryByName = Anilist.query.media("Kamisama Ni Natta Hi");
/*
query {
    Media(type: ANIME, search: "Kamisama Ni Natta Hi") {
        id
    }
}
*/

const queryById = Anilist.query.media({
    id: 118419
});
/*
query {
    Media(type: ANIME, id: 118419) {
        id
    }
}
*/
```

### Creating the query

#### Media Query

##### Fetching without building the query

If you build the query and try to fetch it without telling which fields to return it will default to returning `id` to avoid errors.

```ts
const query = Anilist.query.media("Kamisama Ni Natta Hi");

await query.fetch();
/*
{ id: 118419 }
*/

query.withEpisodes();

await query.fetch();
/*
{ episodes: 12 }
*/
```

##### Creating a complete search query

As the library follows the builder pattern you can just nest functions until you have every field you want.

```ts
const query = Anilist.query.media("Kamisama Ni Natta Hi")
        .withId()
        .withSiteUrl()
        .withTitles()
        .withStatus();

await query.fetch();
/*
{
  id: 118419,
  siteUrl: 'https://anilist.co/anime/118419',
  title: {
    romaji: 'Kamisama ni Natta Hi'
  },
  status: 'FINISHED'
}
*/
```

