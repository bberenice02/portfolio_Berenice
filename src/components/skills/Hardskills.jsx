import React from 'react'

const Hardskills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Hardskills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Languages de programmation</h3>
              <span className="skills__level">Python, Java, C, SQL, JavaScript, HTML, XML, JSON</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Outils et technologies</h3>
              <span className="skills__level">Figma, Unity, Unreal Engine</span>
            </div>
          </div>

          {/*<div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>*/}
        </div>

        {/*<div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">XML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name"></h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  )
}

export default Hardskills