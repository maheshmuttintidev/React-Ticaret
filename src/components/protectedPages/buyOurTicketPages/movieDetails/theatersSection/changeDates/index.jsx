import React from "react"
import styles from "./index.module.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styled from "styled-components"

const DateSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: auto;
    height: 10px;
    width: 10px;
    background-color: #ffffff;
    border-radius: 100vh;
  }
  :nth-child(2) {
    color: var(--secondary-color);
  }
  :nth-child(2)::after {
    background-color: var(--secondary-color);
    height: 19px;
    width: 19px;
    top: calc(100% + 11px);
  }
`

export default function ChangeDates() {
  return (
    <section className={styles.wrapper}>
      <div>
        <FaChevronLeft />
      </div>
      <div className={styles.datesWrapper}>
        <DateSelector>
          <span>Sat</span>
          <span>27</span>
        </DateSelector>
        <DateSelector>
          <span>Sun</span>
          <span>28</span>
        </DateSelector>
        <DateSelector>
          <span>Mon</span>
          <span>29</span>
        </DateSelector>
      </div>
      <div>
        <FaChevronRight />
      </div>
    </section>
  )
}
