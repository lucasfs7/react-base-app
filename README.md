# React APP base boilerplate

## What?

This is a simple react app base boilerplate on top of `create-react-app`

## Features

- plugued with `react-router`
- automatic page (scene) routing
- require/import from relative paths (src)

---

## How?

To use it simply clone this repository and run with `npm`:
```
$ npm i
$ npm start
```
or with `yarn`
```
$ yarn
$ yarn run start
```

---

## Directory structure

This is very important because the routing is based on this structure

```
public
  |-- index.html
  |-- favicon.ico
src
  |-- config
  |     |-- routes.js
  |-- scenes
  |     |-- index.js
  |     |-- a.js
  |     |-- b.js
  |-- index.js
  |-- index.css
```

### public

This is the public wrapper of the app

### src

The source of the react app

### src/config

All kinds of app configurations, including the routes

### src/scenes

The scenes are the pages of the app, each scene is attached to a route. There are two ways to create a scene:

Exporting a component by default (this way the route path will match file name):
```
// src/scenes/b.js

import React from 'react'

export default () => (
  <div>Page A</div>
)
```

Exporting the route props (with this way, it's possible to create a custom route):
```
// src/scenes/a.js

import React from 'react'

export const path = '/b'

export const component = () => (
  <div>Page B</div>
)
```
