import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BalancePage(){

const navigate = useNavigate();

const [selectedMonth,setSelectedMonth] = useState(null);

const currentUser =
JSON.parse(localStorage.getItem('currentUser'));

const [expenses] = useState(

currentUser
? JSON.parse(
localStorage.getItem(`expenses_${currentUser.email}`)
) || []
: []

);

const months = [
...new Set(
expenses.map(item => item.date.slice(0,7))
)
].sort();

const selectedMonthExpenses =
expenses
.filter(item => item.date.slice(0,7) === selectedMonth)
.sort((a,b)=>a.date.localeCompare(b.date));

return(

<div className="main-container balance-page">

<div className="bg-sticker sticker-1">📊</div>
<div className="bg-sticker sticker-2">📈</div>
<div className="bg-sticker sticker-3">💹</div>
<div className="bg-sticker sticker-4">💰</div>
<div className="bg-sticker sticker-5">🧮</div>
<div className="bg-sticker sticker-6">🏦</div>

<div className="card large-card">

<h2 className="page-title">
Wallet Summary
</h2>

{
months.length === 0 ? (

<p style={{textAlign:'center'}}>
No expenses added yet.
</p>

) : (

months.map(month=>(

<div
className="summary-box month-click-box"
key={month}
onClick={()=>setSelectedMonth(month)}
>

<h2>{month}</h2>

<p className="click-text">
Click to view expenses
</p>

</div>

))

)
}

{
selectedMonth && (

<div className="summary-box expense-detail-box">

<h2>
Expenses in {selectedMonth}
</h2>

<table className="expense-table">

<thead>
<tr>
<th>Description</th>
<th>Amount</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{
selectedMonthExpenses.map(item=>(

<tr key={item.id}>
<td>{item.description}</td>
<td>₹ {item.amount}</td>
<td>{item.date}</td>
</tr>

))
}

</tbody>

</table>

</div>

)
}

<button
className="main-btn"
onClick={()=>navigate('/')}
>
Back
</button>

</div>

</div>

)

}

export default BalancePage;