import React from "react"
import ChangeDates from "./changeDates"
import SearchBar from "./searchBar"
import TheaterList from "./theaterList"

export default function TheatersSection() {
  return (
    <>
      <ChangeDates />
      <SearchBar />
      <TheaterList />
    </>
  )
}
