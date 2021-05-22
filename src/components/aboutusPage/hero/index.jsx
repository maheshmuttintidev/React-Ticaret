import React from 'react'
import style from './index.module.css'

export default function Hero() {
    return (
        <div className={style.heroContainer}>
            <h1 style={{fontSize: "50px", textAlign: "center", fontFamily: "Caros Regular"}}>We are providing the resale option</h1>
            <span className={style.aboutP}>The great platform to resale your ticket and also buy our ticket</span>
        </div>
    )
}
