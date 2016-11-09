import React from 'react'
import ReactDOM from 'react-dom'
import SceneA from 'scenes/a'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SceneA />, div)
});
