import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LanguageSwitch from '../components/LanguageSwitch';
import { useLanguage } from '../context/LanguageContext';

function Dashboard(){
const { t } = useLanguage();
const navigate = useNavigate();

const currentUser =
JSON.parse(localStorage.getItem('currentUser'));

const logout = () => {
localStorage.removeItem('currentUser');
alert('Logged out successfully');
navigate('/login');
};

const handleMoneyPortal = () => {
navigate('/MoneyPortal')
}

const handlebalance = () => {
navigate('/balance')
}

const handlelogin = () => {
navigate('/login')
}

const handlesignup = () => {
navigate('/signup')
}


return(

<div className="main-container dashboard-page">

<div className="bg-sticker sticker-1">💼</div>
<div className="bg-sticker sticker-2">📊</div>
<div className="bg-sticker sticker-3">💳</div>
<div className="bg-sticker sticker-4">📈</div>
<div className="bg-sticker sticker-5">🧾</div>
<div className="bg-sticker sticker-6">💰</div>

<div className="navbar">

<div className="nav-logo">
{ t.ExpenseFlow || "ExpenseFlow"}
</div>

<div className="nav-links">

{/* <button onClick={()=>navigate('/moneyportal')}>
Money Portal
</button> */}

<Button title="MoneyPortal"
onClick={handleMoneyPortal}
/>

<Button title="Balance"
onClick={handlebalance}
/>

{/* <button onClick={()=>navigate('/balance')}>
Wallet Summary
</button> */}

{
currentUser ? (

<button onClick={logout}>
Logout
</button>


) : (

<>

{/* <button onClick={()=>navigate('/login')}>
Login
</button> */}

<Button title="Login"
onClick={handlelogin}
/>

<Button title="SignUp"
onClick={handlesignup}
/>

{/* <button onClick={()=>navigate('/signup')}>
Signup
</button> */}

<LanguageSwitch />

</>


)
}

</div>

</div>

<div className="card">

<h1 className="page-title">
ExpenseFlow Dashboard
</h1>

{
currentUser ? (

<p style={{textAlign:'center', fontSize:'18px'}}>
Welcome, {currentUser.name}
</p>

) : (

<p style={{textAlign:'center', fontSize:'18px'}}>
Please login or signup to manage your expenses.
</p>

)
}

</div>

</div>

)

}

export default Dashboard;