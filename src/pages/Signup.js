import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){

const navigate = useNavigate();

const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const signupUser = () => {

if(!name || !email || !password){
alert('Please fill all fields');
return;
}

let users = JSON.parse(localStorage.getItem('users')) || [];

const existingUser = users.find(user => user.email === email);

if(existingUser){
alert('User already exists. Please login.');
return;
}

const newUser = {
name,
email,
password
};

users.push(newUser);

localStorage.setItem('users', JSON.stringify(users));

alert('Signup successful. Please login.');

navigate('/login');

};

return(

<div className="main-container signup-page">

<div className="bg-sticker sticker-1">📝</div>
<div className="bg-sticker sticker-2">👤</div>
<div className="bg-sticker sticker-3">🔐</div>
<div className="bg-sticker sticker-4">🚀</div>
<div className="bg-sticker sticker-5">💼</div>
<div className="bg-sticker sticker-6">✅</div>

<div className="card">

<h2 className="page-title">Signup</h2>

<input
className="input-box"
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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
onClick={signupUser}
>
Create Account
</button>

</div>

</div>

)

}

export default Signup;