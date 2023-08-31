import React from 'react'
import './main.css'
import Text from '../../Components/Text/Text'
import HealthTheme from '../../Components/HealthTheme/HealthTheme'
import { FaHeartbeat } from 'react-icons/fa'
import Flower from '../../Components/Flower/Flower'
import SubCircle from '../../Components/SubCircle/SubCircle'
import MainCircle from '../../Components/MainCircle/MainCircle'

export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="task__container">

          {/* pookkalam section */}

          <div className="task__section">
            <Flower />
           
            {/* Health care section */}

            <div className="healthcare__main">
              <HealthTheme />
              <div className="healthcare__sub">
                <FaHeartbeat color="red" size={30} />
              </div>

              <div className="subCircle_design">
                <SubCircle />
              </div>
            </div>
            <div className="MainCircle_design">
              <MainCircle />
            </div>
          </div>

          {/* details */}

          <div className="text">
            <Text />
          </div>


        </div>
      </div>
    </div>
  )
}
