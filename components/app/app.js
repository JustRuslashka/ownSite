import React, { Component } from 'react';
import GreetingsPage from '../greetingsPage/greetingsPage';
import Skills from '../skills/skills';


import './app.scss';

export default class App extends Component {

 render () {
   return(
     <div className='container' >
        
        <GreetingsPage/>
        <Skills/>
     </div>
   )
 }

};
