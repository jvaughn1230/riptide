import React, {useState} from 'react';

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //const user = {userName, password}
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input 
            type='text' 
            value={userName} 
            onChange={(e)=>setUserName(e.target.value)}
            required
        >    
        </input>
        <label>Password:</label>
        <input 
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}    
        ></input>
        <button>Login</button>
    </form>
  );
}

export default Login;