import React from 'react'
import styled from 'styled-components'
import Player from '../player'
const LiveWrapper=styled.div``;

const LiveVideo=styled.div `
    max-width:640px;
    max-height:480px;
    margin:0 auto;
`;



export default class Watch extends React.Component{
    render(){
        return <LiveWrapper>
            <LiveVideo>
                <Player streamPath={"phongvx"}/>
            </LiveVideo>
          
        </LiveWrapper>
    }
}