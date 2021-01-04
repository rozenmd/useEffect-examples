import React, { useEffect } from 'react'

export default function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/people/1/')
      const newData = await response.json()
    }

    fetchData()
  })

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  )
}
