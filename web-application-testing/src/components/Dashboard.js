import React from 'react'


const Dashboard = props => {
    const hit = hit => {
        return hit + 1
    }

    const strike = strike => {
        if (strike < 3) {
            return strike + 1
        } else return 0
    }

    const ball = ball => {
        if (ball < 4) {
            return ball + 1
        } else return 0
    }

    const foul = strike => {
        if (strike === 0 ) {
            return strike + 1
        } else if (strike === 1) {
            return strike + 1
        } else return strike
    }
    
    return (
        <div className='dashboard'>
            <button className='strike' 
            onClick={() => props.setStrike(strike)}
            >Strike!</button>
            <button className='ball' 
            onClick={() => props.setBall(ball)}
            >Ball</button>
            <button className='foul' 
            onClick={() => props.setStrike(foul)}
            >Foul</button>
            <button className='hit' 
            onClick={() => props.setHit(hit)}
            >Hit!</button>
        </div>
    )
}

export default Dashboard;