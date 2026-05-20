import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';

function ShowExpense(){

const navigate = useNavigate();

const currentUser =
JSON.parse(localStorage.getItem('currentUser'));

const expenseKey =
currentUser ? `expenses_${currentUser.email}` : '';

const [expenses,setExpenses] = useState(
currentUser
? JSON.parse(localStorage.getItem(expenseKey)) || []
: []
);

const [editId,setEditId] = useState(null);
const [editDescription,setEditDescription] = useState('');
const [editAmount,setEditAmount] = useState('');
const [editDate,setEditDate] = useState('');

const sortedExpenses =
[...expenses].sort(
(a,b)=>a.date.localeCompare(b.date)
);

const deleteExpense = (id) => {

const firstConfirm = window.confirm(
'Are you sure you want to delete this expense?'
);

if(!firstConfirm){
return;
}

const secondConfirm = window.confirm(
'This action cannot be undone. Confirm delete again?'
);

if(!secondConfirm){
return;
}

const updatedExpenses =
expenses.filter(item => item.id !== id);

setExpenses(updatedExpenses);

localStorage.setItem(
expenseKey,
JSON.stringify(updatedExpenses)
);

};

const startEdit = (item) => {

setEditId(item.id);
setEditDescription(item.description);
setEditAmount(item.amount);
setEditDate(item.date);

};

const updateExpense = () => {

if(!editDescription || !editAmount || !editDate){
alert('Please fill all fields');
return;
}

const updatedExpenses =
expenses.map(item => {

if(item.id === editId){

return {
...item,
description: editDescription,
amount: Number(editAmount),
date: editDate,
month: editDate.slice(0,7)
};

}

return item;

});

setExpenses(updatedExpenses);

localStorage.setItem(
expenseKey,
JSON.stringify(updatedExpenses)
);

setEditId(null);
setEditDescription('');
setEditAmount('');
setEditDate('');

alert('Expense Updated Successfully');

};

const cancelEdit = () => {

setEditId(null);
setEditDescription('');
setEditAmount('');
setEditDate('');

};

return(

<div className="main-container expense-page">

<div className="bg-sticker sticker-1">🧾</div>
<div className="bg-sticker sticker-2">📋</div>
<div className="bg-sticker sticker-3">🔍</div>
<div className="bg-sticker sticker-4">✏️</div>
<div className="bg-sticker sticker-5">🗑️</div>
<div className="bg-sticker sticker-6">📅</div>

<div className="card large-card">

<h2 className="page-title">
Expense History
</h2>

<table className="expense-table">

<thead>

<tr>
<th>Month</th>
<th>Description</th>
<th>Amount</th>
<th>Date</th>
<th>Actions</th>
</tr>

</thead>

<tbody>

{

sortedExpenses.map(item=>(

<tr key={item.id}>

<td>{item.date.slice(0,7)}</td>

<td>

{
editId === item.id ?

<input
className="table-input"
value={editDescription}
onChange={(e)=>setEditDescription(e.target.value)}
/>

:

item.description
}

</td>

<td>

{
editId === item.id ?

<input
className="table-input"
type="number"
value={editAmount}
onChange={(e)=>setEditAmount(e.target.value)}
/>

:

`₹ ${item.amount}`
}

</td>

<td>

{
editId === item.id ?

<input
className="table-input"
type="date"
value={editDate}
onChange={(e)=>setEditDate(e.target.value)}
/>

:

item.date
}

</td>

<td>

{
editId === item.id ?

<div className="action-buttons">

<button
className="small-btn save-btn"
onClick={updateExpense}
>
Update
</button>

<button
className="small-btn cancel-btn"
onClick={cancelEdit}
>
Cancel
</button>

</div>

:

<div className="icon-box">

<FaEdit
className="edit-icon"
onClick={()=>startEdit(item)}
/>

<FaTrash
className="delete-icon"
onClick={()=>deleteExpense(item.id)}
/>

</div>

}

</td>

</tr>

))

}

</tbody>

</table>

<br/>

<button
className="main-btn"
onClick={()=>navigate('/moneyportal')}
>
Back
</button>

</div>

</div>

)

}

export default ShowExpense;