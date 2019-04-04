import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './pages/home'
import TicTacToe from './pages/tictactoe_project/tictactoe'
import TechHome from './pages/tech_talk_project/pages/TechHome'
import MediaQ from './pages/tech_talk_project/pages/MediaQ'
import Flex from './pages/tech_talk_project/pages/Flex'
import Grid from './pages/tech_talk_project/pages/Grid'
import Background from './pages/tech_talk_project/pages/Background'
import TreasureHunt from './pages/treasure_hunt_project/treasure_hunt'

export default props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/tic-tac-toe' component={TicTacToe}/>
        <Route path='/tech-talk' exact component={TechHome}/>
        <Route path='/tech-talk/mediaquery' exact component={MediaQ}/>
        <Route path='/tech-talk/flex' exact component={Flex}/>
        <Route path='/tech-talk/grid' exact component={Grid}/>
        <Route path='/tech-talk/background' exact component={Background}/>
        <Route path='/christmas-present-hunt' exact component={TreasureHunt}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)
