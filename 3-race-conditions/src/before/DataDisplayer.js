import React, { useEffect, useState } from 'react'

export default function DataDisplayer(props) {
  const [data, setData] = useState(null)
  const [fetchedId, setFetchedId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await fetch(
          `https://swapi.dev/api/people/${props.id}/`
        )
        const newData = await response.json()

        setFetchedId(props.id)
        setData(newData)
      }, Math.round(Math.random() * 12000))
    }

    fetchData()
  }, [props.id])

  if (data) {
    return (
      <div>
        <p style={{ color: fetchedId === props.id ? 'green' : 'red' }}>
          Displaying Data for: {fetchedId}
        </p>
        <p>{data.name}</p>
      </div>
    )
  } else {
    return null
  }
}
