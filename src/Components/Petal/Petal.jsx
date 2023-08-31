import React from 'react'
import './Petal.css'

export default function Petal({width,height,bg}) {
  return (
    <>
      <div className="petal_sec" style={{ width: width, height: height }}>
        <div className="petal_leftSide" style={{ backgroundColor: bg }}></div>
        <div className="petal_rightSide" style={{ backgroundColor: bg }}></div>
      </div>
    </>
  )
}
