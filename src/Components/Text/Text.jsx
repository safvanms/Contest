import React from 'react'
import './text.css'
import SquareFlower from '../SquareFLower/SquareFlower'

export default function Text() {
  const text = 'Happy Onam'
  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FF00FF',
    '#00FFFF',
    '#FFFF00',
    '#FFA500',
    '#800080',
  ]

  const coloredText = text.split('').map((letter, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {letter}
    </span>
  ))
  return (
    <div className="text__section">
      <div style={{ display: 'flex' }}>
        <span style={{ transform: 'rotate(25deg)' }}>
          <SquareFlower
            width={25}
            height={25}
            bgMain={'orange'}
            bgSub={'yellow'}
          />
        </span>
        <SquareFlower
          width={25}
          height={25}
          bgMain={'green'}
          bgSub={'yellowGreen'}
        />
        <span style={{ transform: 'rotate(30deg)' }}>
          <SquareFlower
            width={25}
            height={25}
            bgMain={'purple'}
            bgSub={'pink'}
          />
        </span>
      </div>

      <h2 style={{ color: '#000300' }}>Wishing you a wonderful day. </h2>
      <h1>{coloredText}</h1>
      <p className="quote">Stay healthier , stay happier </p>
      <p style={{ color: 'gray', fontSize: '11px' }}>
        Muhammed Safvan P | muhammedsafvan1ms@gmail.com
      </p>
    </div>
  )
}
