import React, { useState, useEffect } from 'react'

const Location = () => {
  const [value, setValue] = useState('0,0')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setValue(position.coords.latitude + ',' + position.coords.longitude)
        setError(null)
      },
        (error) => setError(error.message)
      )
    }

  }, [])
  return (
    <>
      <input type="text" className="input-field" placeholder="Enter Location" value={value} onChange={e => setValue(e.target.value)} />
      {error && <h3>{error}</h3>}
      {value && <h3>{value}</h3>}
    </>
  )
}

export default Location
