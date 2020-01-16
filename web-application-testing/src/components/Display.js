import React from 'react';

const Display = props => {
    return (
        <div className='display'>
        <div className='balls-count'>
            Balls: {props.ball}
        </div>
        <div className='strikes-count'>
            Strikes: {props.strike}
        </div>
        <div className='hits-count'>
            Hits: {props.hit}
        </div>
        </div>
    )
}

export default Display;
