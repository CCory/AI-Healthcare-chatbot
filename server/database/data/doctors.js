const doctor = require('../models/doctors');

module.exports = async () => {
  const doctors = [
    {
      fullName: 'Dabija',
      email: 'Dabija@gmail.com',
      picture: 'https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg',
      gender: 'masculin',
      specialization: 'Pediatrie',
      birthDate: '1990/5/25',
    },
    {
      fullName: 'Marius',
      email: 'Marius@gmail.com',
      picture: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg',
      gender: 'masculin',
      specialization: 'Chirurgie',
      birthDate: '1975/5/10',
    },
    {
      fullName: 'Angela',
      email: 'Angela@gmail.com',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2y6VTwqxU7NhiV2jvfKP3Yonb4b0ABcUMMpwmum4UVuzNOxb_&usqp=CAU',
      gender: 'feminin',
      specialization: 'Cardiologie',
      birthDate: '1970/5/25',
    },
    {
      fullName: 'Anton',
      email: 'Anton@gmail.com',
      picture: 'https://webcomicms.net/sites/default/files/clipart/174399/picture-doctor-174399-2506358.jpg',
      gender: 'masculin',
      specialization: 'Dentist',
      birthDate: '1982/5/5',
    },
    {
      fullName: 'Nicoleta',
      email: 'Nicoleta@gmail.com',
      picture: 'https://atlantabodybalance.com/wp-content/uploads/2018/09/Car_Accident_Doctor.png',
      gender: 'feminin',
      specialization: 'Dermatologie',
      birthDate: '1989/5/3',
    },
  ];
  await doctor.create(doctors);
};
