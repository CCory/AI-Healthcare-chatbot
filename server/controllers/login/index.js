const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
const admins = require('../../database/models/admin');

// google oath function by search on the email coming
// from google by the email inside the database and
// send back the user is admin if it exist and user if not.

const googleLogin = async (req, res, next) =>{ 
  const adminData = await admins.findOne({ email: 'coman.corina91@gmail.com' });
  if (adminData) {
    res.status(200).json({
      status: 200,
      admin: true,
      name: adminData.firstName + ' ' + adminData.lastName,
      picture: adminData.avatar,
      email: adminData.email,
    });
  } else {
    res.status(200).json({
      status: 200,
      admin: false,
      name: adminData.firstName + ' ' + adminData.lastName,
      picture: adminData.avatar,
      email: adminData.email,
    });
  }
};

module.exports = googleLogin;
