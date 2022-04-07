import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneFilled } from '@ant-design/icons';
import resImg from '../../assets/img/banner_img.png';
import 'typeface-playfair-display';
import './style.css';

const HomePage = () => (
  <>
    <div className="reservation">
      <div className="reservation__box">
        <p className="res_paragraph">Suntem aici pentru a te ajuta</p>
        <h3 className="res_heder">Cea mai buna ingrijire & cei mai buni Doctori</h3>
        <p className="detail__paragraph">
        Clinicile noastre sunt deschise 24/24 și 7 zile pe săptămână.
        Obțineți rezervarea dvs. online la orice medic sau orice clinică, indiferent unde vă aflați.
        </p>
        <p className="res__phone">
          <PhoneFilled /> 0234.975.786
        </p>
        <Link to="/reservation" className="resBtn">
          PROGRAMARE
        </Link>
      </div>
      <div className="reservation__view">
        <img className="reservation__img" src={resImg} alt="banner" />
      </div>
    </div>
  </>
);

export default HomePage;
