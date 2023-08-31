import React from 'react'
import './people.css'

export default function People({width,height,background,subBackground}) {
  return (
    <div>
     <div className="main__box" style={{width:width , height:height}} >
        <div className="box box1" style={{backgroundColor:background}}></div>
        <div className="box box2"  style={{backgroundColor:subBackground}}></div>
        <div className="box box3"  style={{backgroundColor:subBackground}}></div>
        <div className="box box4"  style={{backgroundColor:subBackground}}></div>
      </div>
    </div>
  )
}
