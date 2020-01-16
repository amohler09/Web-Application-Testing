import React from 'react'
import {addBall} from '../utils/addBall'
import {addFoul} from '../utils/addFoul'
import {addHit} from '../utils/addHit'
import {addStrike} from '../utils/addStrike'



const Dashboard = props => {
    
    
    return (
        <div className='dashboard'>
            <button className='strike' 
            onClick={() => props.setStrike(addStrike)}
            >Strike!</button>
            <button className='ball' 
            onClick={() => props.setBall(addBall)}
            >Ball</button>
            <button className='foul' 
            onClick={() => props.setStrike(addFoul)}
            >Foul</button>
            <button className='hit' 
            onClick={() => props.setHit(addHit)}
            >Hit!</button>
        </div>
    )
}

export default Dashboard;