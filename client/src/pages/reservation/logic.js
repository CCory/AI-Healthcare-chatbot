import axios from 'axios';

const logic = {
  doctorsName: async (clinic) => {
    try {
      return (
        await axios.get(`/api/v1/doctors/clinic/${clinic}`)
      ).data.doctorsData.map(({ fullName }) => fullName);
    } catch (e) {
      return 'No Data';
    }
  },

  postReservation: async (
    patientName,
    patientGender,
    clinic,
    doctorName,
    appointmentDate,
    appointmentTime,
    patientPhone,
    patientBirthDate
  ) => {
    try {
      const { data } = await axios.post('/api/v1/appointments/postAppoint', {
        patientName,
        patientGender,
        clinic,
        doctorName,
        appointmentDate,
        appointmentTime,
        patientPhone,
        patientBirthDate,
      });
      return data.message;
    } catch (e) {
      return 'Ne pare rau nu ati introdus toate datele';
    }
  },
};

export default logic;
