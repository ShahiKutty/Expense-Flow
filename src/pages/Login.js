import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const loginUser = () => {

if(!email || !password){
alert('Please fill all fields');
return;
}

let users = JSON.parse(localStorage.getItem('users')) || [];

const validUser = users.find(
user => user.email === email && user.password === password
);

if(!validUser){
alert('Invalid email or password');
return;
}

localStorage.setItem('currentUser', JSON.stringify(validUser));

alert('Login successful');

navigate('/');

};

return(

<div className="main-container login-page">

<div className="bg-sticker sticker-1">🔐</div>
<div className="bg-sticker sticker-2">👤</div>
<div className="bg-sticker sticker-3">💳</div>
<div className="bg-sticker sticker-4">🛡️</div>
<div className="bg-sticker sticker-5">📲</div>
<div className="bg-sticker sticker-6">✅</div>

<div className="card">

<h2 className="page-title">Login</h2>

<input
className="input-box"
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="input-box"
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="main-btn"
onClick={loginUser}
>
Login
</button>

</div>

</div>

)

}

export default Login;