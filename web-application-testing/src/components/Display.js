import React from 'react';
import styled from 'styled-components'

const SB = styled.div`
    margin: auto;
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    margin-top: 5%;
    background-color: black;
    padding: 3%;
    border: 3px solid crimson;
    box-shadow: -8px 8px 8px dimgrey;
   
`;

const SBDiv = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 90%;
    margin: auto;
    margin-bottom: 2%;
    
`;

const SBInnerDiv = styled.div`
    background-color: white;
    width: 30%;
    font-family: 'Codystar', cursive;
    border: 4px solid crimson;
    box-shadow: -5px 5px 8px crimson;
`;

const Header = styled.p`
    font-size: 4rem;
    font-family: 'Oswald', sans-serif;
    border-radius: 5px;
    box-shadow: 0px 8px 8px dimgrey,
                0px -8px 8px dimgrey;
`;

const Score = styled.p`
    font-size: 4rem;
    border-radius: 5px;
    font-stretch: extra-expanded;
    letter-spacing: 20px;
    color: red;
    text-shadow: -5px 5px 4px dimgrey;
    
`;


const Display = props => {
    return (
        <SB>
            <SBDiv>
            <SBInnerDiv>
                <Header>Home</Header>
                <Score>0{props.hit}</Score>
            </SBInnerDiv>
            <SBInnerDiv>
                <Header>Inning</Header>
                <Score>08</Score>
            </SBInnerDiv>
            <SBInnerDiv>
                <Header>Guest</Header>
                <Score>22</Score>
            </SBInnerDiv>
            </SBDiv>

            <SBDiv>
                <SBInnerDiv>
                    <Header>Balls</Header>
                    <Score>0{props.ball}</Score>
                </SBInnerDiv>
                <SBInnerDiv>
                    <Header>Strikes</Header>
                    <Score>0{props.strike}</Score>
                </SBInnerDiv>
                <SBInnerDiv>
                    <Header>Fouls</Header>
                    <Score>0{props.foul}</Score>
                </SBInnerDiv>
            </SBDiv>
        </SB>
    )
}

export default Display;
