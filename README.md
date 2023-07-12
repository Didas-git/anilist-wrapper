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
    - [Query arguments](#query-arguments)
    - [Creating the query](#creating-the-query)
      - [Page Query](#page-query)
      - [Other Queries](#other-queries)
        - [Fetching without building the query](#fetching-without-building-the-query)
        - [Creating a complete search query](#creating-a-complete-search-query)
        - [Relations](#relations)
        - [Passing arguments at run time](#passing-arguments-at-run-time)
  - [OAuth](#oauth)
    - [`createOAuthURI`](#createoauthuri)
      - [Implicit Grant URI](#implicit-grant-uri)
      - [Authorization Code Grant](#authorization-code-grant)
    - [`getAccessToken`](#getaccesstoken)
    - [`handleOnServer`](#handleonserver)

## Status

To see the current status of the wrapper check the [todo](TODO.md) list.

## Installation

```sh
npm i anilist
```

## Usage

### Creating a query

```ts
const query = anilist.mediaQuery();
```

### Query arguments

The queries can accept either an object of `MediaArguments` or a string.

If you pass in a string it will be transformed into `{ search: string }` internally.

```ts
const queryByName = anilist.mediaQuery("Kamisama Ni Natta Hi");
/*
query {
    Media(type: ANIME, search: "Kamisama Ni Natta Hi") {
        id
    }
}
*/

const queryById = anilist.mediaQuery({
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
const query = anilist.pageQuery()

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

#### Other Queries

##### Fetching without building the query

If you build the query and try to fetch it without telling which fields to return it will default to returning `id` to avoid errors.

```ts
const query = anilist.mediaQuery("Kamisama Ni Natta Hi");

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
const query = anilist.mediaQuery("Kamisama Ni Natta Hi")
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
anilist.mediaQuery().withRelations({
  edges: (edge) => edge.withId().withNode((node) => node.withId()),
  nodes: (node) => node.withId(),
  pageInfo: (page) => page.withTotal(),
  // And optionally they will have an args object
})
```

##### Passing arguments at run time

Instead of passing the query arguments on query creation you can use `<MediaQuery>.prototype.arguments` to change them every time you want to run fetch. This will avoid creating a new query instance every time you change something on it.

```ts
const query = anilist.mediaQuery();

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

## OAuth

The library provides 3 helpers methods for OAuth and i will explain them here

> **Remember:** 
> All options can be passed to the client constructor so you don't have to pass them in every function

### `createOAuthURI`

This method returns the url with all required properties

#### Implicit Grant URI

```ts
// 
const uri = anilist.createOAuthURI({
  clientId: /* the id (can be an number or string) */,
  responseType: "token"
});
```

#### Authorization Code Grant

```ts
const uri = const uri = anilist.createOAuthURI({
  clientId: /* the id (can be an number or string) */,
  responseType: "code"
})
```

### `getAccessToken`

This helper method allows you to convert the Authorization Code Grant into an access token 

```ts
const response = anilist.getAccessToken(codeGrant, {
  clientId: /* the id (can be an number or string) */,
  clientSecret: /* the client secret */,
  redirectUri: /* the redirect uri, this is required for this step*/,
})
```

### `handleOnServer`

This method will wait for a connection on `http://localhost:3000` and return the code that it received from that connection

[^*]: Not everything is supported yet, please refer to the todo list to see what has full implementation or open an issue to talk about it 