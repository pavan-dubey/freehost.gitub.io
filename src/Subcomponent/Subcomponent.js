
import React from 'react'
import './Subcomponent.css'


let Subcomponent =(props)=> {
    
    
    return (
        <div className='container'>
            <div>{props.Date.toISOString()}</div>
            <div className="inspect-num-one">
                <h2>{props.Title}</h2>
                <div className="inspect-num-two">{props.Price}</div>
            </div>
        </div>
    )
}
export default Subcomponent;