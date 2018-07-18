import React from 'react'
import {headerHeight,borderColor,containerMaxWidth} from './theme'
import styled from 'styled-components'
import userAvatar from '../images/us1.png'
import Watch from './pages/watch'
import Home from './pages/home'

import {Route,Switch} from 'react-router-dom'

export const AppWrapper=styled.div`
    background:white;
`;
export const PageTitle=styled.h1`
    font-size:30px;
    color:blue;
`;
export const Header=styled.div`
   height: ${headerHeight}px;
   border-bottom:1px solid ${borderColor};
`;
export const MainContent=styled.div`
   padding:20px 0;
`;

export const Footer=styled.div`
   border-top:1px solid ${borderColor};
   padding:10px 0;
`;

export const Container=styled.div`
   max-width: ${containerMaxWidth}px;
   margin:0 auto;
`;


export const Copyright=styled.p`
  font-size:12px;
  text-align:center;
`;

export const HeaderTitle=styled.div`
    font-size:35px;
    font-weight:800;
    line-height: ${headerHeight}px;
    flex-grow:1;
    text-align:center;
    color:rgba(0,0,0,0.8);
`;

export const HeaderMenu=styled.div`
  width:50px;
  display:flex;
  align-items:center;
`;
export const HeaderWrapper=styled.div`
    display:flex;
`;

export const HeaderUserAvatar=styled.img`
    border-radius:50%;
    width:30px;
    height:30px;
`;

export default class App extends React.Component{
    render(){
        return <AppWrapper>
            <Header>
                <HeaderWrapper>
                    <HeaderTitle>
                        Camera
                        
                    </HeaderTitle>
                    <HeaderMenu>
                        <HeaderUserAvatar alt="" src={userAvatar}>
                            
                        </HeaderUserAvatar>
                    </HeaderMenu>
                  
                </HeaderWrapper>
            </Header>
            <MainContent>
                <Container>
                    <Switch>
                        <Route exact path={'/watch/:id'} component={Watch}/>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/home'} component={Home}/>
                    </Switch>
                </Container>
            </MainContent>
            <Footer>
                <Container>
                    <Copyright>Copyright</Copyright>

                </Container>
            </Footer>
        </AppWrapper>
    }
}