import React from 'react';
import './style.css';
import aboutUsIMg from '../../assets/img/aboutUs.png';
import Emergency from '../../assets/img/emergency.svg';
import Appointment from '../../assets/img/appointment.svg';
import Qualfied from '../../assets/img/qualified.svg';

const AboutUs = () => (
  <div className="about__us">
    <div className="about__left">
      <img src={aboutUsIMg} alt="about-us" />
    </div>
    <div className="about__right">
      <h3 className="about__header">Despre noi</h3>
      <p className="about__paragraph">
        Aceasta aplicatie a fost creata pentru a ajuta oamenii care doresc sa
        economiseasca timp si pentru a eficientiza timpul si costurile pentru 
        a afla mai repede daca au o problema de sanatate si daca trebuie sa 
        mearga la medic pentru mai multe investigatii.
        <br/>Puteti sa va faceti o programare online catre una dintre clinicile
         noastre, avand posibilitatea de a alege ziua si medicul specialist.
      </p>
      <div className="about__adv">
        <li>
          <img className="adv__info" src={Emergency} alt="about-us" />
          <h4> Urgenta</h4>
        </li>
        <li id="adv__center">
          <img className="adv__info" src={Appointment} alt="about-us" />{' '}
          <h4> Urgenta</h4>
        </li>
        <li>
          <img className="adv__info" src={Qualfied} alt="about-us" />{' '}
          <h4> Urgenta</h4>
        </li>
      </div>
    </div>
  </div>
);
export default AboutUs;
