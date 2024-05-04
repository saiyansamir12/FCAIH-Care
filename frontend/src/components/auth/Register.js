import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (registerData) => {
    console.log(registerData);
  };

  return (
    <div className='pharmacy-register'>
      <div className='register-container'>
        <h1 className='register-title'>Register for Pharmacy</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="divider">
            <label className='input-label'>
              First Name <span>*</span>
              <div className='input-wrapper'>
                <input type="text" {...register("firstName", { required: true })} />
              </div>
            </label>
            {errors.firstName && <span className='error-message'>This field is required</span>}
            <label className='input-label'>
              Last Name <span>*</span>
              <div className='input-wrapper'>
                <input type="text" {...register("lastName", { required: true })} />
              </div>
            </label>
            {errors.lastName && <span className='error-message'>This field is required</span>}
          </div>
          <label className='input-label'>
            Email <span>*</span>
            <div className='input-wrapper'>
              <input type="email" {...register("email", { required: true })} />
            </div>
          </label>
          {errors.email && <span className='error-message'>This field is required</span>}
          <label className='input-label'>
            Phone <span>*</span>
            <div className='input-wrapper'>
              <input type="phone" {...register("phone", { required: true })} />
            </div>
          </label>
          {errors.phone && <span className='error-message'>This field is required</span>}
          <label className='input-label'>
            Password <span>*</span>
            <div className='input-wrapper'>
              <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
            </div>
          </label>
          {errors.password?.type === 'required' && <span className='error-message'>This field is required</span>}
          {errors.password?.type === 'minLength' && <span className='error-message'>Password must be at least 8 characters long</span>}
          {errors.password?.type === 'maxLength' && <span className='error-message'>Password must be at most 20 characters long</span>}
          <button type="submit" className='submit-button'>REGISTER</button>
        </form>
      </div>
    </div>
  );
}

export default Register;