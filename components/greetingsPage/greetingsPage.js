import React from 'react';
import AnimGreetings from '../animGreetings/animGreetings';


import './greetingsPage.scss';

const GreetingsPage = () => {
  return(
    <div className='greetingsPage'>
       <AnimGreetings/>
       <div className = 'greetingsPage__inside'>
         <h1 className ='greetingsPage__label'>
           Hello, i'm <span className = 'greetingsPage__name'>Mironiuk Ruslan</span>
         </h1>
         <h2 className = 'greetingsPage__position'>
           Junior Frontend React Developer
         </h2>
       </div>
    </div>
  )


};

export default GreetingsPage;
