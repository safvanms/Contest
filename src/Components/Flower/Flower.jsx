import React from 'react'
import './Flower.css'
import Petal from '../Petal/Petal'

export default function Flower() {
  const numberOfPetals = 15

  return (
    <>
      <div className="flower_container">
        {[...Array(numberOfPetals)].map((_, index) => (
          <div key={index} className={`petals petal${index + 1}`}>
            <Petal width={50} height={50} bg={'yellow'} />
          </div>
        ))}
        <div className="inner_circle"></div>
      </div>
    </>
  )
}
