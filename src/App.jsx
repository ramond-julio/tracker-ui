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
import UpdateTransaction from "./components/Transactions/UpdateTransaction"
import Dashboard from "./components/Users/Dashboard"
import UserProfile from "./components/Users/UserProfile"
import AuthRoute from "./components/Auth/AuthRoute"

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
          <Route path="/add-category" element={<AuthRoute><AddCategory /></AuthRoute>} />
          <Route path="/categories" element={<AuthRoute><CategoriesList /></AuthRoute>} />
          <Route path="/update-category/:id" element={<AuthRoute><UpdateCategory /></AuthRoute>} />
          <Route path="/add-transaction" element={<AuthRoute><TransactionForm /></AuthRoute>} />
          <Route path="/update-transaction/:id" element={<AuthRoute><UpdateTransaction /></AuthRoute>} />
          <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
          <Route path="/profile" element={<AuthRoute><UserProfile /></AuthRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
