import React from "react"
import "./Card.css"

const Card = props => (

    <div key={props.id}
        className="col-sm-2 bcard"
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.getPlayer(props.id)}
    >
        <p> {props.name} </p>
    </div>

)


export default Card;