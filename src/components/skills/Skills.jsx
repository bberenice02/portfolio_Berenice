import React from 'react';
import "./skills.css";
import Softskills from './Softskills';
import Hardskills from './Hardskills';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Mes compétences</span>

            <div className="skills__container container grid">
                <Hardskills />
                <Softskills />
            </div>
        </section>
    )
}

export default Skills