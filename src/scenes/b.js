import React from 'react'
import { Link } from 'react-router'

export const path = '/b'
export const take = 'public'

export const component = () => (
  <div>
    <h1>Page B</h1>
    <Link to='/'>Back</Link>
  </div>
)
