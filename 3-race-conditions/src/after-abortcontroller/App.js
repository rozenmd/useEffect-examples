import React, { useState } from 'react'
import DataDisplayer from './DataDisplayer'

export default function App() {
  const [currentId, setCurrentId] = useState(null)

  const handleClick = () => {
    const idToFetch = Math.round(Math.random() * 80)
    setCurrentId(idToFetch)
  }

  return (
    <React.Fragment>
      <div>
        {currentId ? <p>Latest requested ID: {currentId}</p> : null}

        <button type="button" onClick={handleClick}>
          Fetch data!
        </button>
      </div>
      <hr />
      {currentId ? <DataDisplayer id={currentId} /> : null}
    </React.Fragment>
  )
}
