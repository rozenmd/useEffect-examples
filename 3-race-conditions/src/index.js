import React from 'react'
import ReactDOM from 'react-dom'

import AppBefore from './before/App'
// import AppAfterBoolean from './after-boolean/App'
// import AppAfterAbortController from './after-abortcontroller/App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <AppBefore />
    {/* <AppAfterBoolean /> */}
    {/* <AppAfterAbortController /> */}
  </React.StrictMode>,
  rootElement
)
