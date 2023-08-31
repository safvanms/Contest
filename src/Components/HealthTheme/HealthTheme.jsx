import React from 'react'
import './HealthTheme.css'
import People from '../People/People'

export default function HealthTheme() {
  return (
    <div className='people_container'>
      <div className="shades">
      </div>
      <div className="people">
        <div className="people_sec">
          <div className="sec1">
            <People
              width={45}
              height={45}
              background={'orange'}
              subBackground={'orange'}
            />
          </div>

          <div className="sec2">
            <People
              width={45}
              height={45}
              background={'orange'}
              subBackground={'orange'}
            />
          </div>
          <div className="sec3">
            <People
              width={45}
              height={45}
              background={'orange'}
              subBackground={'orange'}
            />
          </div>

          <div className="sec4">
            <People
              width={45}
              height={45}
              background={'orange'}
              subBackground={'orange'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
