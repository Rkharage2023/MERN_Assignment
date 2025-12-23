import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { loginUser } from '../services/userService'
import { toast } from 'react-toastify'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const signin =async (event) => {
        console.log(`email - ${email}`);
        console.log(`password - ${password}`);

        if(email == '')
            toast.warn('Please enter email')
        else if(password=='')
            toast.warn('Please enter password')
        else{
            const result = await loginUser(email,password)
            console.log(result);
            
            if(result.status == 'success'){
                navigate('/home')
                toast.success('user login successful')
            }else{
                toast.error(result.error)
            }
        }
            
    }

  return (
    <div className='container w-50'>
        <div className="mt-3 mb-3">
            <label htmlFor="inputEmail" className='form-label'>Email</label>
            <input type="text" className='form-control' id='inputEmail' placeholder='Enter Email'  onChange={event =>setEmail(event.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="inputPassword" className='form-label'>Password</label>
            <input type="password" className='form-control' id='inputPassword' placeholder='Enter Password' onChange={event => setPassword(event.target.value)}/>
        </div>

        <div className="mb-3">
            <button className='btn btn-success' onClick={signin}>Login</button>
        </div>

        <div>
            Don't have an account? To Register <Link to='/register'>Click here.</Link>
        </div>
      
    </div>
  )
}

export default Login
