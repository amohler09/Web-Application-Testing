import React from 'react';

const Display = props => {
    return (
        <div className='scoreboard-container'>
            <div className='scoreboard-top'>
            <div className='home-score'>
                <p>Home</p>
                <p>0{props.hit}</p>
            </div>
            <div className='inning'>
                <p>Inning</p>
                <p>08</p>
            </div>
            <div className='guest-score'>
                <p>Guest</p>
                <p>22</p>
            </div>
            </div>

            <div className='scoreboard-bottom'>
                <div className='balls'>
                    <p>Balls</p>
                    <p>0{props.ball}</p>
                </div>
                <div className='strikes'>
                    <p>Strikes</p>
                    <p>0{props.strike}</p>
                </div>
                <div className='fouls'>
                    <p>Fouls</p>
                    <p>02</p>
                </div>
            </div>
        </div>
    )
}

export default Display;
