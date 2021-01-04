import React, { useEffect, useState } from 'react'

export default function DataDisplayer(props) {
  const [data, setData] = useState(null)
  const [fetchedId, setFetchedId] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/${props.id}/`,
            {
              signal: abortController.signal,
            }
          )
          const newData = await response.json()

          setFetchedId(props.id)
          setData(newData)
        } catch (error) {
          if (error.name === 'AbortError') {
            //Aborting a fetch throws an error
            //So we can't update state afterwards
          }
          // Handle other request errors here
        }
      }, Math.round(Math.random() * 12000))
    }

    fetchData()
    return () => {
      abortController.abort()
    }
  }, [props.id])

  return (
    <div>
      <p>Request may take up to 12 seconds</p>
      <hr />
      {data ? (
        <>
          <p style={{ color: fetchedId === props.id ? 'green' : 'red' }}>
            Displaying Data for: {fetchedId}
          </p>
          <p>Result: {data.name}</p>
        </>
      ) : null}
    </div>
  )
}
