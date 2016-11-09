import React from 'react'
import { Link } from 'react-router'

export const path = '/'

export const component = (props) => (
  <div>
    <h1>Page Index</h1>
    <ul>
      <li>
        <Link to='/a'>Page A</Link>
      </li>
      <li>
        <Link to='/b'>Page B</Link>
      </li>
    </ul>
  </div>
)
