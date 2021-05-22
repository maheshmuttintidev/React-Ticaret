import React from "react"
import NetworkImg from "../../../assets/about_page/network_img.png"
import style from "./index.module.css"

export default function Section1() {
  return (
    <div className={style.section1Container}>
      <div className={style.section1SubContainer1}>
        <div>
          <h2 className="sub-heading">Heading1</h2>
          <span className={style.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            molestiae neque quae repudiandae totam ducimus temporibus ut minus
            possimus quo enim incidunt dolor eaque molestias omnis quisquam aut
            amet accusantium, hic rem consequatur error facere natus? Odit
            voluptatum nihil totam eveniet aspernatur aut assumenda perferendis
            quisquam? Delectus atque maxime harum?
          </span>
        </div>
        <div>
          <img
            className={style.networkImg}
            src={NetworkImg}
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <h2 className="sub-heading">Heading2</h2>
          <span className={style.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex enim
            cumque in eos non repellendus corporis dicta sapiente reiciendis
            debitis ea quod expedita maxime consectetur accusantium vel
            cupiditate quidem praesentium dolore doloremque adipisci quasi,
            possimus veniam a. In natus voluptas repellendus, eos dolor ab
            libero. Commodi quaerat similique libero doloribus.
          </span>
        </div>
      </div>
    </div>
  )
}
