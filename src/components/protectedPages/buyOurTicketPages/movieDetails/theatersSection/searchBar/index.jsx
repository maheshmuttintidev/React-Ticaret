import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import styles from "./index.module.css"

const SearchInputWrapper = styled.div`
  position: relative;
  width: 812px;
`

const SearchInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 20px 36px;
  box-sizing: padding-box;
  position: relative;
  @media (max-width: 900px) {
    width: 80%;
  }
`
export default function SearchBar() {
  return (
    <SearchInputWrapper>
      <SearchInput
        type="text"
        placeholder="Search theatres"
        name="theatreName"
        className="input-field"
      />
      <FaSearch className={styles.searchIcon} />
    </SearchInputWrapper>
  )
}
