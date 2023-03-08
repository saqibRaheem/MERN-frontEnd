import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user,setUser] = useState({
        name:'',email:'',password:''
    })

    const onChangeInput = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const registerSubmit = async(e) =>{
        e.preventDefault();
        try {
          await  axios.post('/user/register',{...user})
            localStorage.setItem('firstlogin', true);
            window.location.href = '/login';
            
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    return (
        <div className='login-page'>
            <form onSubmit={registerSubmit}>
                <input type="text" name='name' placeholder='Name' value={user.name} required onChange={onChangeInput} />
                <input type="email" name='email' placeholder='Email' value={user.email} required onChange={onChangeInput} />
                <input type="password" name='password' placeholder='Password' value={user.password} autoComplete="on" onChange={onChangeInput}/>
                <div className='row'>
                <button type='submit'>Register</button>
                <Link to='/login'>login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
