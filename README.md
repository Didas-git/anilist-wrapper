# Anilist Wrapper

An UNOFFICIAL wrapper for the anilist api written in typescript that tries to follow the [builder pattern](https://refactoring.guru/design-patterns/builder) to give a more consistent interface to create objects.

You can visit the official graphql docs for anilist [here](https://anilist.github.io/ApiV2-GraphQL-Docs/) to find out everything you can do[^*].

## Table of Contents

- [Anilist Wrapper](#anilist-wrapper)
  - [Table of Contents](#table-of-contents)
  - [Status](#status)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Creating a query](#creating-a-query)
    - [Media query arguments](#media-query-arguments)
    - [Creating the query](#creating-the-query)
      - [Page Query](#page-query)
      - [Media Query](#media-query)
        - [Fetching without building the query](#fetching-without-building-the-query)
        - [Creating a complete search query](#creating-a-complete-search-query)
        - [Relations](#relations)
        - [Passing arguments at run time](#passing-arguments-at-run-time)
      - [Character Query](#character-query)

## Status

To see the current status of the wrapper check the [todo](TODO.md) list.

## Installation

```sh
npm i anilist
```

## Usage

### Creating a query

The exported `Anilist` object gives you 2 ways of creating a query, either by calling `query.<type>()` or `<type>Query()`.

```ts
const query = anilist.mediaQuery();
```
```ts
const query = anilist.query.media();
```

I will be using `query.<type>()` for the examples moving forward

### Media query arguments

The media query can accept either an object of `MediaArguments` or a string.

If you pass in a string it will be transformed into `{ search: string }` internally.

```ts
const queryByName = anilist.query.media("Kamisama Ni Natta Hi");
/*
query {
    Media(type: ANIME, search: "Kamisama Ni Natta Hi") {
        id
    }
}
*/

const queryById = anilist.query.media({
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

#### Page Query

if you build the query and fetch it without telling which fields to return it will default to returning `{ media: { id } }` with `{ page: 1, perPage: 10 }`

```ts
const query = anilist.query.page()

await query.fetch()
/*
{
  media: [
    { id: 1 },  { id: 5 }, 
    { id: 6 },  { id: 7 }, 
    { id: 8 },  { id: 15 },
    { id: 16 }, { id: 17 },
    { id: 18 }, { id: 19 } 
  ]
}
*/

query.withMedia(media => media.withTitles())

await query.fetch()
/*
{
  media: [
    { title: { romaji: 'Cowboy Bebop' } },
    { title: { romaji: 'Cowboy Bebop: Tengoku no Tobira' } },
    { title: { romaji: 'TRIGUN' } },
    { title: { romaji: 'Witch Hunter ROBIN' } },
    { title: { romaji: 'Bouken Ou Beet' } },
    { title: { romaji: 'Eyeshield 21' } },
    { title: { romaji: 'Hachimitsu to Clover' } },
    { title: { romaji: 'Hungry Heart: Wild Striker' } },
    { title: { romaji: 'Initial D FOURTH STAGE' } },
    { title: { romaji: 'MONSTER' } }
  ]
}
*/
```

#### Media Query

##### Fetching without building the query

If you build the query and try to fetch it without telling which fields to return it will default to returning `id` to avoid errors.

```ts
const query = anilist.query.media("Kamisama Ni Natta Hi");

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
const query = anilist.query.media("Kamisama Ni Natta Hi")
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

##### Relations

All relations that use edges and nodes will have the following structure

```ts
anilist.query.media().withRelations({
  edges: (edge) => edge.withId().withNode((node) => node.withId()),
  nodes: (node) => node.withId(),
  pageInfo: (page) => page.withTotal(),
  // And optionally they will have an args object
})
```

##### Passing arguments at run time

Instead of passing the query arguments on query creation you can use `<MediaQuery>.prototype.arguments` to change them every time you want to run fetch. This will avoid creating a new query instance every time you change something on it.

```ts
const query = anilist.query.media();

await query.fetch()
/*
{ id: 1 }
*/

query.arguments({
  search: "Kamisama Ni Natta",
  type: "MANGA"
}).withId().withTitles("romaji", "native")

await query.fetch()
/*
{
  id: 135190,
  title: { romaji: 'Kamisama ni Natta Hi', native: '神様になった日' }
}
*/
```

#### Character Query

The usage is the same as the [MediaQuery](#media-query);

[^*]: Not everything is supported as of yet, please refer to the todo list to see what has full implementation or open an issue to talk about it 