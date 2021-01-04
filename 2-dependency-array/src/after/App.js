import React, { useEffect, useState } from 'react'

export default function MyComponent(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${props.id}/`)
      const newData = await response.json()
      setData(newData)
    }

    fetchData()
  }, [props.id])

  return (
    <div>
      <h1>Hello!</h1>
      {data ? <div>{data.name}</div> : null}
    </div>
  )
}
