import React from 'react';
import './card.styles.css';

export const Card = (props) => (

    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} style={{height:'180px',width:'180px'}} />
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
)