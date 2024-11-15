import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-globe about__icon'></i>
        <h3 className="about__title">Langues</h3>
        <span className="about__subtitle">Français - Langue maternelle <br />Anglais - Niveau B2 (TOEIC 930)<br />Allemand - Niveau débutant</span>
      </div>

      <div className="about__box">
        <i class='bx bx-heart about__icon' ></i>
        <h3 className="about__title">Hobbies</h3>       
        <span className="about__subtitle">Joue de l'alto depuis 2013<br /></span>        
        <span className="about__subtitle">Orchestre symphonique de l’université depuis 2020<br /></span>        
        <span className="about__subtitle">Bénévole dans l’association du Gala de l’école depuis mars 2023</span>
      </div>

      {/*<div className="about__box">
        <i class='bx bx-support about__icon'></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>*/}
    </div>
  )
}

export default Info