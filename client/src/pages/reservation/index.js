import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import logic from './logic';
import InputField from '../../component/form/textField';
import SelectBox from '../../component/form/selectBox';
import PickerDate from '../../component/form/calendar';
import formImg from '../../assets/img/service.png';
import json from './clinicData.json';
import './style.css';

const { doctorsName, postReservation } = logic;
const key = 'updatable';

// message alert
const openMessage = (msg) => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: msg, key, duration: 2 });
  }, 1000);
};
const Reservation = () => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [bookDate, setBookDate] = useState();
  const [clinic, setClinic] = useState();
  const [doctors, setDoctors] = useState();
  const [time, setTime] = useState();
  const [doctorsItem, setDoctorsItem] = useState();
  const [date, pickDate] = useState();
  const[patientPhone, setPatientPhone ] = useState();
  const[patientBirthDate, setPatientBirthDate] = useState();

  const clearState = () => {
    setName('');
    setGender('');
    setBookDate('');
    setClinic('');
    setDoctors('');
    setTime('');
    setPatientPhone('');
    setPatientBirthDate('');
  };
  useEffect(() => {
    if (clinic) {
      doctorsName(clinic).then(setDoctorsItem);
    }
  }, [clinic]);

  return (
    <div className="appointment">
      <div>
        <InputField
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Va rog sa introduceti numele"
          prefix
        />
        <SelectBox
          value={gender}
          setValue={(value) => setGender(value)}
          placeholder="Alege sexul"
          items={['masculin', 'feminin']}
        />
        <InputField
          value={patientPhone}
          onChange={(event) => setPatientPhone(event.target.value)}
          placeholder="Va rog sa introduceti numarul de telefon"
        /><br></br> 
        <PickerDate
          value={patientBirthDate}
          placeholder="Introduceti data nasterii "
          onChange={(date, dateString) => {
            pickDate(dateString);
            setPatientBirthDate(date, dateString);
          }}
        />
        <SelectBox
          value={clinic}
          setValue={(value) => setClinic(value)}
          placeholder="Alege specializarea"
          items={json.clinics}
        />
        <SelectBox
          value={doctors}
          items={doctorsItem}
          setValue={(value) => setDoctors(value)}
          placeholder="Alege medicul"
        />
        <PickerDate
          value={bookDate}
          placeholder="Alege data programarii "
          onChange={(date, dateString) => {
            pickDate(dateString);
            setBookDate(date, dateString);
          }}
        />
        <SelectBox
          value={time}
          setValue={(value) => setTime(value)}
          placeholder="Alege ora"
          items={json.time}
        />
        
        <Button
          className="book__btn"
          onClick={() =>
            postReservation(name, gender, clinic, doctors, date, time, patientPhone,
               patientBirthDate).then(
              (msg) => {
                openMessage(msg);
                clearState();
              }
            )
          }
        >
          Programeaza-te  
        </Button>
        <Button className="book__reset" onClick={() => clearState()}>
          Resetati
        </Button>
      </div>

      <div>
        <img className="appointment__img" src={formImg} alt="formImg" />
      </div>
    </div>
  );
};

export default Reservation;
