import React, { Component } from "react"
import Layout from './Layout'

class AboutUs extends Component {
  render() {
    return (
      <Layout>
        <main>
          <header className="about-hero-banner mh-50">
            <div className="flex-row">
              <h3>Header1</h3>
              <h3>Header2</h3>
              <h3>Header3</h3>
            </div>
            <div className="flex-row">
              <p>Paragraph1</p>
              <p>Paragraph2</p>
              <p>Paragraph3</p>
            </div>
          </header>
          <section className="auto-adjust">
            <div className="flex-row first-part-of-about">
              <div className="">
                <h3>Lorem Ipsum</h3>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="network-img"></div>
            </div>
            <div className="flex-row second-part-of-about">
              <div className=""></div>
              <div className="">
                <h3>Lorem Ipsum</h3>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              </div>
            </div>
          </section>
          <div className="team-container auto-adjust-padding">
            <h3 className="text-center">Team</h3>
            <section className="auto-adjust">
              <div className="flex-row auto-flow">
                <p>Dhanraj</p>
                <p>Rohith</p>
                <p>Bharadwaj</p>
                <p>Sai Krishna</p>
                <p>Thiru Hruday Reddy</p>
                <p>Priya Likhita</p>
                <p>Akhila Sai</p>
                <p>Mahesh Muttinti</p>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    );
  }
}

export default AboutUs;