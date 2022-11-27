# Anilist Wrapper

An UNOFFICIAL wrapper for the anilist api written in typescript that tries to follow the [builder pattern](https://refactoring.guru/design-patterns/builder) to give a more consistent interface to create objects.

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
        - [Adding query defaults](#adding-query-defaults)

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

#### Page Query

if you build the query and fetch it without telling which fields to return it will default to returning `{ media: { id } }` with `{ page: 1, perPage: 10 }`

```ts
const query = Anilist.query.page()

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
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] },
    { title: [Object] } 
  ]
}
*/
```

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

##### Adding query defaults

The query builder supports default values to be passed in for the ones who wish to either avoid using multiple functions or want to change the query at run type while keeping certain fields.

```ts
const query = Anilist.query.media("Kamisama Ni Natta Hi", ["id", "format"]);

await query.fetch();
/*
{ id: 118419, format: 'TV' }
*/

query.withStatus()

await query.fetch();
/*
{ id: 118419, format: 'TV', status: 'FINISHED' }
*/
```