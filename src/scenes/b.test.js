import React from 'react'
import ReactDOM from 'react-dom'
import { component as SceneB } from 'scenes/b'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SceneB />, div)
});
