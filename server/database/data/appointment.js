const appointment = require('../models/appointments');

module.exports = async () => {
  const appointments = [
    {
      patientName: 'Mihai',
      patientPhone: '123456',
      patientEmail: 'mihai@gmail.com',
      patientGender: 'masculin',
      patientBirthDate: '1990-12-15',
      patientAddress: 'Stefan cel Mare',
      clinic: 'Dermatologie',
      doctorName: 'Nicoleta',
      appointmentDate: '2020-4-15',
      appointmentTime: '10:30',
    },
    {
      patientName: 'Alexandru',
      patientPhone: '123456',
      patientEmail: 'alexandru@gmail.com',
      patientGender: 'masculin',
      patientBirthDate: '1990-12-15',
      patientAddress: 'Bucegi',
      clinic: 'Dentist',
      doctorName: 'Anton',
      appointmentDate: '2020/6/17',
      appointmentTime: '11:30',
    },
    {
      patientName: 'Elena',
      patientPhone: '123456',
      patientEmail: 'elena@gmail.com',
      patientGender: 'feminin',
      patientBirthDate: '1990/6/25',
      patientAddress: 'Bucegi',
      clinic: 'Urgente',
      doctorName: '',
      appointmentDate: '2020/6/18',
      appointmentTime: '12:30',
    },
    {
      patientName: 'Alin',
      patientPhone: '123456',
      patientEmail: 'alin@gmail.com',
      patientGender: 'masculin',
      patientBirthDate: '1990/12/10',
      patientAddress: '',
      clinic: 'Cardiologie',
      doctorName: 'Angela',
      appointmentDate: '2020/7/20',
      appointmentTime: '9:30',
    },
  ];
  await appointment.create(appointments);
};
