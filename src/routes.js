import React from 'react'
import { Switch, Route } from 'react-router-dom'
import homePage from './components/homePage'
import aboutMePersonal from './components/aboutMePersonal'
import aboutMeWork from './components/aboutMeWork'



const Routes = () => (

  <Switch>
    <Route exact path='/' component={homePage} />
    <Route path='/aboutMeWork' component={aboutMeWork} />
    <Route path='/aboutMePersonal' component={aboutMePersonal} />
  </Switch>

);

export default Routes;
