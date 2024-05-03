import React from 'react';
import { useForm } from 'react-hook-form';
import userApi from '../../utils/api/userApi';
import { useNavigate } from 'react-router-dom';


function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
    const onSubmit = async (registerData) => {
        registerData.role = 'user'; // assign role here
        console.log('Sending data:', registerData); // add logging here
        try {
            const newUser = await userApi.createUser(registerData);
            console.log(newUser);
            navigate('/authentication', { state: { message: 'User created successfully' } });
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
  
  return (
    <div className='register'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divider">
          <label className='input-label'>
            First Name <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("firstName", { required: true })} />
            </div>
          </label>
          {errors.firstName && <span>This field is required</span>}
          <label className='input-label'>
            Last Name <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("lastName", { required: true })} />
            </div>
          </label>
        {errors.lastName && <span>This field is required</span>}
        </div>
        <label className='input-label'>
          Email <span>*</span>
          <div className='input-wrapper'>
            <input type="email" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>This field is required</span>}
        <label className='input-label'>
          Phone <span>*</span>
          <div className='input-wrapper'>
            <input type="phone" {...register("phone", { required: true })} />
          </div>
              </label>
        <label className='input-label'>
          Address <span>*</span>
          <div className='input-wrapper'>
            <input type="address" {...register("address", { required: true })} />
          </div>
              </label>
        <label className='input-label'>
          City <span>*</span>
          <div className='input-wrapper'>
            <input type="city" {...register("city", { required: true })} />
          </div>
              </label>
        <label className='input-label'>
          Postal Code <span>*</span>
          <div className='input-wrapper'>
            <input type="PostalCode" {...register("PostalCode", { required: true })} />
          </div>
              </label>
        {errors.phone && <span>This field is required</span>}
        <label className='input-label'>
          Password <span>*</span>
          <div className='input-wrapper'>
            <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
          </div>
        </label>
        {errors.password?.type === 'required' && <span>This field is required</span>}
        {errors.password?.type === 'minLength' && <span>Password must be at least 8 characters long</span>}
        {errors.password?.type === 'maxLength' && <span>Password must be at most 20 characters long</span>}
        <button type="submit">REGISTER</button>
      </form>
    </div>
  )
}

export default Register;
