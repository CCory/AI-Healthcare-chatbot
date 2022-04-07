import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState();

  const successResponse = () => {
    axios
      .post('/api/v1/login/google', {  })
      .then(({ data }) => setUser(data))
      .catch();
  };

  const failureResponse = (response) => {
    console.log('error', response);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        {!user && ( 
          // <Link to="/login" className="link">
          //  Login
          // </Link>
          <button 
            onClick={successResponse}
          >
            login
          </button>
        )}
      </Menu.Item>
      {user && user.admin && (
        <Menu.Item>
          <Link to="/CP" className="link">
            Control Panel
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      {user ? (
        <img src={user.picture} className="avatar" />
      ) : (
        <Avatar size={30} icon={<UserOutlined />} />
      )}
    </Dropdown>
  );
};
export default Login;
