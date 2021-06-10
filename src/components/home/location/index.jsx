import React, { useState, useEffect } from "react"
import style from "./index.module.css"
// import axios from "axios"

const Location = () => {
  const [value, setValue] = useState("0,0")
  // const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setValue(position.coords.latitude + "," + position.coords.longitude)
          //   async function getData() {
          //     const data = await axios.get(
          //       "https://maps.googleapis.com/maps/api/geocode/json?latlng=23.34354,-34.35454&key=AIzaSyAR4us9r-9BXz8JyQ0Aj3nWIARG_yhJuls"
          //     )
          //     return data
          //   }

          //   console.log(getData())
          // setError(null)
        }
        // (error) => setError(error.message)
      )
    }
  }, [])
  return (
    <>
      <div className={style.locationPopupWrapper}>
        <input
          type="text"
          className="input-field location"
          placeholder="Enter Location"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default Location
