import React, { useState, useEffect } from 'react'
import style from './index.module.css'

const Location = () => {
    const [value, setValue] = useState('0,0')
    // const [error, setError] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setValue(position.coords.latitude + ',' + position.coords.longitude)
                // setError(null)
            },
                // (error) => setError(error.message)
            )
        }

    }, [])
    return (
        <>
            <div className={style.locationPopupWrapper}>
                <input type="text" className="input-field location" placeholder="Enter Location" value={value} onChange={e => setValue(e.target.value)} />
            </div>
        </>
    )
}

export default Location
