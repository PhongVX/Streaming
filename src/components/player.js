import React from 'react'
import styled from 'styled-components'
import Hls from 'hls.js'
const PlayerWrapper= styled.div `
    position:relative;
`;

const PlayerInner= styled.div `
   
`;

const VideoTitle= styled.h2 `
   font-size:25px;
   color:rgba(0,0,0,0.7);
   line-height:25px;
`;

const VideoLiveButtonTitle= styled.span `
    display: inline-block;
    border: 1px solid red;
    padding: 2px 10px;
    line-height:25px;
    font-size:14px;
    margin-right:5px;
    font-weight:400;
`;
export default class Player extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

        const liveChannel="tabvn";
        const video =this.player;

        video.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            return false;
        })



        if(Hls.isSupported() && this.player) {
          var hls = new Hls();
          const streamUrl=`http://80.211.155.220:8080/live/${liveChannel}/index.m3u8`;
          hls.loadSource(streamUrl);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function() {
            video.play();
        });
       }

    }
    _onTouchInsidePlayer(){
        if(this.player.paused){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
    render(){
        const style={
            width:640,
            height:360,
            background:'#000000'
        }
        return <PlayerWrapper>
            <PlayerInner>
                <video controls={true} onClick={this._onTouchInsidePlayer.bind(this)} style={style} ref={(player) => this.player = player} autoPlay={true}/>
            </PlayerInner>
            <VideoTitle><VideoLiveButtonTitle>Live</VideoLiveButtonTitle>Garage Camera Live Stream</VideoTitle>
        </PlayerWrapper>
    }
}