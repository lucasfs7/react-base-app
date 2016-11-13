# React APP base boilerplate

## What?

This is a simple react app base boilerplate on top of `create-react-app`

## Features

- plugued with `react-router`
- automatic page (scene) routing
- require/import from relative paths (src)
- possibility to group scenes as takes (with grouped scenes you can have a wrapper component for multiple routes)

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
  |-- takes
  |--   |-- app.js
  |--   |-- public.js
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
```js
// src/scenes/b.js

import React from 'react'

export default () => (
  <div>Page A</div>
)
```

Exporting the route props (with this way, it's possible to create a custom route):
```js
// src/scenes/a.js

import React from 'react'

export const path = '/b'

export const component = () => (
  <div>Page B</div>
)
```

### src/takes

The take act like a scenes wrapper, where it's possible to group scenes under the same wrapper component:
```js
// src/takes/app.js

export const onEnter = () => {
  /* here can go auth logic to allow/block all scenes that point to this take */
}

export const component = (props) => (
  <div>
    <div>Here goes some header/nav</div>
    { props.children }
  </div>
)
```
