import React from 'react'
import ReactDOM from 'react-dom'

import AppBefore from './before/App'
// import AppAfter from './after/App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <AppBefore />
    {/* <AppAfter/> */}
  </React.StrictMode>,
  rootElement
)
