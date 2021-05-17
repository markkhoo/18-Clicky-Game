import React, { Component } from "react";
import "./style.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="card" id={this.props.id}>
                <img alt="Random Interior Design, no cheating" src={this.props.image} />
            </div>
        )
    }
}

export default Card;