import React from 'react'
import ReactDOM from 'react-dom'

import AppBefore from './before/App'
// import AppAfter from './after/App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <AppBefore id={1} />
    {/* <AppAfter id={1} /> */}
  </React.StrictMode>,
  rootElement
)
