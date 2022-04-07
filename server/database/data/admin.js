const admin = require('../models/admin');

module.exports = async () => {
  const admins = [
    {
      firstName: 'Corina',
      lastName: 'Coman',
      email: 'coman.corina91@gmail.com',
      password: '123',
      avatar: 'https://secureservercdn.net/45.40.149.159/m3u.e59.myftpupload.com/wp-content/uploads/2020/02/An-inspirational-female-doctor.jpg',
    },

  ];
  await admin.create(admins);
};
