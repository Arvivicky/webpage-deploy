import React from 'react';
import './Title.css';
import klogo from './clglogo.png'
import clglogo from './klogo.jpg';

const Title=(props)=>
{
    return(
        
    <div className="title">
        <img className='clglogo' src={clglogo}/>
        <h1><span className='clgtitle'>Kongu Engineering College</span></h1>
        <img className="klogo" src={klogo}/>
    </div>
    )
}
export default Title;
