import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getMoviesList } from "../../../../../../redux/actions/movies.actions"

export default function TheaterList() {
  const dispatch = useDispatch()
  let { isLoading, movieList } = useSelector((state) => state.moviesList)
  const [theaterList, setTheaterList] = useState([])
  const getTheaterListRef = useRef(() => {})
  const movies = movieList?.movies

  getTheaterListRef.current = () => {
    const getTheaterList = () => {
      const theaterList = movies?.map((movie) => {
        return setTheaterList(movie?.theater_list)
      })
      return theaterList
    }
    getTheaterList()
  }

  useEffect(() => {
    dispatch(getMoviesList())
    getTheaterListRef.current()
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div style={{ marginTop: "3rem" }}>
      {theaterList &&
        theaterList.map(({ theater_name, theater_address }, idx) => (
          <div style={{ marginTop: "20px" }} key={idx}>
            <h3>{theater_name}</h3>
            <p>{theater_address}</p>
            <br />
          </div>
        ))}
    </div>
  )
}
