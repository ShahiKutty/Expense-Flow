import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AddIncome from './pages/AddIncome';
import AddExpense from './pages/AddExpense';
import ShowExpense from './pages/ShowExpense';
import BalancePage from './pages/BalancePage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

return(

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/moneyportal" element={<Home/>}/>
<Route path="/addincome" element={<AddIncome/>}/>
<Route path="/addexpense" element={<AddExpense/>}/>
<Route path="/showexpense" element={<ShowExpense/>}/>
<Route path="/balance" element={<BalancePage/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

)

}

export default App;