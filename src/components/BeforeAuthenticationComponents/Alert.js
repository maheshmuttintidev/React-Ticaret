import React, { Component, createRef } from 'react'

const modalRef = createRef()

export default class Alert extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    closeModal = () => {
        modalRef.current.style.display = "none"
    }


    render() {
        return (
            <div ref={modalRef} className="overlay-fixed">
                <div className="modal-container">
                    <span className="apply-cursor red top-right" onClick={this.closeModal}>&times;</span>
                    <div>
                        <h3>You have to Login or Register First to access the features</h3>
                        <p>Please Login, Option is at the top right Corner</p>
                    </div>
                </div>
            </div>
        )
    }
}