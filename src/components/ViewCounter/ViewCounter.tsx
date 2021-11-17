import { useState, useEffect } from 'react'

const ViewCounter = ({ slug }) => {
  const [hits, setHits] = useState(undefined)
  useEffect(() => {
    // Don't count hits on localhost
    /*
    if (process.env.NODE_ENV !== 'production') {
      return
    }
    */
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/functions/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === 'number') {
          setHits(json.hits)
        }
      })
  }, [slug])
  if (typeof hits === 'undefined') {
    return null
  }
  return <div>Views: {hits}</div>
}

export default ViewCounter
