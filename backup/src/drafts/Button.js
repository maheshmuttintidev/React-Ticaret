import React, { Component } from 'react'
import ForwardInput from './Button'

class Button extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    render() {
        return (
        <div>
            <ForwardInput ref={this.inputRef} />
            <button onClick={this.clickHandler}>Focus</button>
        </div>
        )
    }
}

export default Button
