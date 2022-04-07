import React, { useState, useEffect } from 'react';
import './style.css';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Alert } from 'antd';
import ControlPanel from './layout';
import imgLogo from '../../assets/img/logo.png';

const ControlPanelLayout = () => {
  const [user, setUser] = useState({ admin: false });

  const successResponse = async () => {
    let { data } = await axios.post('/api/v1/login/google/', {  });
    setUser(data);
  };

  useEffect(() => {
    successResponse();
  }, []);
  
  return (
    <>
      {user && user.admin && <ControlPanel user={user} />}
    </>
  );
};
export default ControlPanelLayout;
