import React from 'react'
import {strike, ball, foul, hit} from './utils'

const Dashboard = props => {
    return (
        <div className='dashboard'>
            <button className='strike' 
            onClick={() => strike(strike)}>Strike!</button>
            <button className='ball'>Ball</button>
            <button className='foul'>Foul</button>
            <button className='hit'>Hit!</button>
        </div>
    )
}

export default Dashboard;