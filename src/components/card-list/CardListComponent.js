import React, { Component } from 'react'
import {CardComponent} from '../card/CardComponent';
import './card-list.style.css';

export class CardListComponent extends Component {

    render() {
        return (
            <div className='card-list'>
            {
        this.props.monsters.map(monster => <CardComponent key={monster.id} monster={monster}/>)
      }
            </div>
        )
    }
}

export default CardListComponent
