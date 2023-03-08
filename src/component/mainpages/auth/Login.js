import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [user,setUser] = useState({
        email:'',password:''
    })

    const onChangeInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const loginSubmit = async(e) =>{
        e.preventDefault();
        try {
          await  axios.post('/user/login',{...user})
            localStorage.setItem('firstlogin', true);
            window.location.href = '/';
            
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    return (
        <div className='login-page'>
            <form onSubmit={loginSubmit}>
                <input type="email" name='email' placeholder='Email' value={user.email} required onChange={onChangeInput} />
                <input type="password" name='password' placeholder='Password' value={user.password} autoComplete="on" onChange={onChangeInput}/>
                <div className='row'>
                <button type='submit'>Submit</button>
                <Link to='/register'>Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
