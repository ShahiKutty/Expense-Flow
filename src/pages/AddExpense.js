import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Button from '../components/Button';

const schema = yup.object({
  description: yup.string().required('Description is required'),
  amount: yup.number().typeError('Amount is required').positive('Amount must be positive').required(),
  date: yup.string().required('Date is required')
});

function AddExpense(){

const navigate = useNavigate();

const currentUser =
JSON.parse(localStorage.getItem('currentUser'));

const {
register,
handleSubmit,
reset,
formState:{errors}
} = useForm({
resolver:yupResolver(schema)
});

const saveExpense = (data) => {

if(!currentUser){
toast.error('Please login first');
navigate('/login');
return;
}

const expenseKey = `expenses_${currentUser.email}`;

let expenses =
JSON.parse(localStorage.getItem(expenseKey)) || [];

const newExpense = {
id:Date.now(),
description:data.description,
amount:Number(data.amount),
date:data.date,
month:data.date.slice(0,7)
};

expenses.push(newExpense);

localStorage.setItem(expenseKey,JSON.stringify(expenses));

toast.success('Expense added successfully');

reset();

};

const handleMoneyPortal = () => {
navigate('/MoneyPortal')
}

return(

<div className="main-container expense-page">

<div className="bg-sticker sticker-1">🛒</div>
<div className="bg-sticker sticker-2">🧾</div>
<div className="bg-sticker sticker-3">💳</div>
<div className="bg-sticker sticker-4">🍔</div>
<div className="bg-sticker sticker-5">🚕</div>
<div className="bg-sticker sticker-6">🏠</div>

<div className="card form-card">

<h2 className="page-title">Add Expense</h2>

<form onSubmit={handleSubmit(saveExpense)}>

<input
className="input-box"
placeholder="Expense Description"
{...register('description')}
/>
<p className="error-text">{errors.description?.message}</p>

<input
className="input-box"
type="number"
placeholder="Amount Spent"
{...register('amount')}
/>
<p className="error-text">{errors.amount?.message}</p>

<input
className="input-box"
type="date"
{...register('date')}
/>
<p className="error-text">{errors.date?.message}</p>

{/* <button className="main-btn" type="submit">
Save Expense
</button> */}

<Button
   type="submit"
   title="Save Expense"
   className="main-btn"
/>

</form>

<br/>

{/* <button
className="secondary-btn"
onClick={()=>navigate('/moneyportal')}
>
Back
</button> */}

<Button title="Back"
onClick={handleMoneyPortal}
className="secondary-btn"
/>

</div>

</div>

)

}

export default AddExpense;