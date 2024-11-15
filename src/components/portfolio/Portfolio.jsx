import React from 'react';
import { Data } from './Data';
import "./portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My projects</span>

            <div className="portfolio__container">
            {Data.map(({id, image, title, context, duration, technologies, description, role, results, skills }) => {
                return (
                    <div className="portfolio__card" key={id}>
                        <img src={image} alt="" className="portfolio__img" />

                        <h3 className="portfolio__name">{title}</h3>
                        <div className="portfolio__subtitle">Contexte: </div>
                        <p className="portfolio__context">{context}</p>
                        <div className="portfolio__subtitle">Durée et période: </div>
                        <p className="portfolio__duration">{duration}</p>
                        <div className="portfolio__subtitle">Technologies utilisées: </div>
                        <p className="portfolio__technologies">{technologies}</p>
                        <div className="portfolio__subtitle">Description: </div>
                        <p className="portfolio__description">{description}</p>
                        <div className="portfolio__subtitle">Rôle: </div>
                        <p className="portfolio__role">{role}</p>
                        <div className="portfolio__subtitle">Résultats obtenus: </div>
                        <p className="portfolio__results">{results}</p>
                        <div className="portfolio__subtitle">Compétences aquises: </div>
                        <p className="portfolio__skills">{skills}</p>
                    </div>
                );
            })}
            </div>
        </section>
    )
}

export default Portfolio