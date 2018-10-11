```sh
# INSTALL
npm i @dolchi21/file
```

```js
// Import
const file = require('@dolchi21/file')
```

```js
// Write a file
const movies = [
    { title: "Weekend at Bernie's" },
    { title: "Det sjunde inseglet" }
]
await file('movies.json', movies)
```

```js
// Read a file
const movies = await file('movies.json')
movies[0].title // Weekend at Bernie's
movies[1].title // Det sjunde inseglet
```