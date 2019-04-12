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
        <Route exact path='/tic-tac-toe' component={TicTacToe}/>
        <Route exact path='/tech-talk' component={TechHome}/>
        <Route exact path='/tech-talk/mediaquery' component={MediaQ}/>
        <Route exact path='/tech-talk/flex' component={Flex}/>
        <Route exact path='/tech-talk/grid' component={Grid}/>
        <Route exact path='/tech-talk/background' component={Background}/>
        <Route exact path='/christmas-present-hunt' component={TreasureHunt}/>
        <Route path='/' component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
)
