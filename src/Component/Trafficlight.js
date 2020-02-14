import React, { useState } from 'react'
import '../../src/App.css'

function Trafficlight() {
    const [activateLight,setactivateLight]=useState('yellow')
    return (
        <div>
            <div className="holder">
            </div>
            <div className="faller">
                <div className="red" style={activateLight==='red'?{backgroundColor:'red'}:null} onClick={()=>setactivateLight('red')}></div>
                <div className="yellow" style={activateLight==='yellow'?{backgroundColor:'yellow'}:null} onClick={()=>setactivateLight('yellow')}></div>
                <div className="green" style={activateLight==='green'?{backgroundColor:'limegreen'}:null} onClick={()=>setactivateLight('green')}></div>
            </div>
        </div>
    )
}

export default Trafficlight

