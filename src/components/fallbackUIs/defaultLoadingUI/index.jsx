import React from "react"
import styles from "./index.module.scss"

export default function DefaultLoadingUI() {
  return (
    <div className={styles.loadingContainer}>
      <h2>Loading...</h2>
    </div>
  )
}
