import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle from '../../utils/hooks/useUtil';
import { useUser } from '../../utils/hooks/useUser';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useUser();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (loginData) => {
    const user = await login(loginData);
    if (user && location.pathname === '/authentication') {
      navigate('/account');
    }
  };

  return (
    <div className='pharmacy-login'>
      <div className='login-container'>
        <h1 className='login-title'>Pharmacy Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='input-label'>
            Email
            <div className='input-wrapper'>
              <FontAwesomeIcon icon={icons.email} className='icon'></FontAwesomeIcon>
              <input type="text" {...register("email", { required: true })} />
            </div>
          </label>
          {errors.email && <span className='error-message'>This field is required</span>}
          <label className='input-label'>
            Password
            <div className='input-wrapper'>
              <FontAwesomeIcon icon={icons.lock} className='icon'></FontAwesomeIcon>
              <input type="password" {...register("password", { required: true })} />
            </div>
          </label>
          {errors.password && <span className='error-message'>This field is required</span>}
          <button type="submit" className='submit-button'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login;