import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import PublicNavbar from "./components/Navbar/PublicNavbar"
import LoginForm from "./components/Users/Login"
import AddCategory from "./components/Category/AddCategory"
import CategoriesList from "./components/Category/CategoriesList"
import UpdateCategory from "./components/Category/UpdateCategory"
import RegistrationForm from "./components/Users/Register"
import PrivateNavbar from "./components/Navbar/PrivateNavbar"
import { getUserFromStorage } from "./utils/getUserStorage"
import { useSelector } from "react-redux"
import TransactionForm from "./components/Transactions/TransactionForm"
import Dashboard from "./components/Users/Dashboard"
import TransactionList from "./components/Transactions/TransactionList"


function App() {
  //get user 
  const user = useSelector((state => state?.auth?.user))
  return (
    <>
      <BrowserRouter>
      {/* Navbar */}
        {user ? <PrivateNavbar /> : <PublicNavbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/update-category/:id" element={<UpdateCategory />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
