import React from 'react'
import './SquarFlower.css'

export default function SquareFlower({width,height,bgMain,bgSub}) {
  return (
    <div>
      <div className="sqr_flower_container" style={{width:width , height:height}}>
        <div className="sqr_flower_fetal sqr1" style={{backgroundColor:bgMain}} >
          <div className="inner_fetal inner1"  style={{backgroundColor:bgSub}} ></div>
        </div>
        <div className="sqr_flower_fetal sqr2"  style={{backgroundColor:bgMain}} >
          <div className="inner_fetal inner2" style={{backgroundColor:bgSub}} ></div>
        </div>
        <div className="sqr_flower_fetal sqr3"  style={{backgroundColor:bgMain}} >
          <div className="inner_fetal inner3" style={{backgroundColor:bgSub}} ></div>
        </div>
        <div className="sqr_flower_fetal sqr4"  style={{backgroundColor:bgMain}} >
          <div className="inner_fetal inner4" style={{backgroundColor:bgSub}} ></div>
        </div>
      </div>
    </div>
  )
}
