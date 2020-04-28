import React, { Component } from 'react'
import './card.style.css';

export class CardComponent extends Component {
    render() {
        return (
            <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}/>
                <h2>{this.props.monster.name}</h2>
                <h2>{this.props.monster.email}</h2>
            </div>
        )
    }
}

export default CardComponent
