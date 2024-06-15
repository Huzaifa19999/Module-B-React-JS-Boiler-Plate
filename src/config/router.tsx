import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "../pages/SignUp"
import LogIn from "../pages/LogIn"
import Dashboard from "../pages/Dashboard"

function Approuter() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<LogIn/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Approuter
