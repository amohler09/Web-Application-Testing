import React from 'react'
import {addBall} from '../utils/addBall'
import {addFoul} from '../utils/addFoul'
import {addHit} from '../utils/addHit'
import {addStrike} from '../utils/addStrike'
import styled from 'styled-components'

const AwayScoreDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 15%;
    margin-top: 5%;
`;

const AwayScore = props => {
    
    
    return (
        <AwayScoreDiv>
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
        </AwayScoreDiv>
    )
}

export default AwayScore;