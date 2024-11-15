import React from 'react'

const Softskills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Softskills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-walk'></i>

            <div>
              <h3 className="skills__name">Autonome</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-shield'></i>

            <div>
              <h3 className="skills__name">Responsable</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-time-five'></i>

            <div>
              <h3 className="skills__name">Patiente</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-group'></i>

            <div>
              <h3 className="skills__name">Travail d'équipe</h3>
            </div>
          </div>

          {/*<div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name"></h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name"></h3>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  )
}

export default Softskills