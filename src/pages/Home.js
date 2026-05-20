import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Home(){

const navigate = useNavigate();

const handleaddincome = () => {
    navigate('/addincome')
}

const handleaddexpense = () => {
    navigate('/addexpense')
}

const handleshowexpense = () => {
    navigate('/showexpense')
}

const handledashboard = () => {
    navigate('/')
}

return(

<div className="main-container home-page">

<div className="bg-sticker sticker-1">🏦</div>
<div className="bg-sticker sticker-2">💵</div>
<div className="bg-sticker sticker-3">💰</div>
<div className="bg-sticker sticker-4">🪙</div>
<div className="bg-sticker sticker-5">📒</div>
<div className="bg-sticker sticker-6">💳</div>

<div className="card">

<h2 className="page-title">
Money Portal
</h2>

{/* <button
className="main-btn"
onClick={()=>navigate('/addincome')}
>
Add Income
</button> */}

<Button
   title="Add Income"
   onclick={handleaddincome}
   className="main-btn"
/>

<br/>

{/* <button
className="main-btn"
onClick={()=>navigate('/addexpense')}
>
Add Expense
</button> */}

<Button title="Add Expense"
onClick={handleaddexpense}
className="main-btn"
/>


<br/>

{/* <button
className="main-btn"
onClick={()=>navigate('/showexpense')}
>
Show Expenses
</button> */}

<Button title="Show Expense"
onClick={handleshowexpense}
className="main-btn"
/>

<br/>

{/* <button
className="main-btn"
onClick={()=>navigate('/')}
>
Back
</button> */}

<Button title="Back"
onClick={handledashboard}
className="main-btn"
/>

</div>

</div>

)

}

export default Home;