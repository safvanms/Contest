import React from 'react'
import './Leaf.css'

export default function Leaf({ background }) {
  return (
    <div className="leaf__container">
      <div className="main_leaf" style={{ backgroundColor: background }}>
        <div className="sub_leaf" style={{ backgroundColor: 'red' }}></div>
      </div>

      
    </div>
  )
}
