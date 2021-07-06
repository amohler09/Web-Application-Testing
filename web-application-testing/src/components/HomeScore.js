import React from 'react'
import {addBall} from '../utils/addBall'
//import {addFoul} from '../utils/addFoul'
import {addHit} from '../utils/addHit'
import {addStrike} from '../utils/addStrike'
//import {addFoulScore} from '../utils/addFoul'
import styled from 'styled-components'

const HomeScoreDiv = styled.div`
    display: flex;
    margin-left: 3%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    border: 4px solid crimson;
    width: 15%;
    margin-top: 5%;
    box-shadow: -8px 8px 8px dimgrey;
`;

const Button = styled.button`
    font-size: 2rem;
    width: 80%;
    padding: 40% 5%;
    box-shadow: -4px 4px 10px lightgrey;
    font-family: 'Luckiest Guy', cursive;
    
`;

const HomeScore = props => {

    
    
    return (
        <HomeScoreDiv>
            <Button className='strike' 
            onClick={() => props.setStrike(addStrike)}
            >Strike!</Button>
            <Button className='ball' 
            onClick={() => props.setBall(addBall)}
            >Ball</Button>
            <Button className='foul' 
            onClick={() => {props.onClick()}}
            >Foul</Button>
            <Button className='hit' 
            onClick={() => props.setHit(addHit)}
            >Score!</Button>
        </HomeScoreDiv>
    )
}

export default HomeScore;