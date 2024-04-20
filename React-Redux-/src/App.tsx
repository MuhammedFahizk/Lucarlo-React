import Create from "./Pages/Create"
import Home from "./Pages/Home"
import { BrowserRouter ,  Route, Routes } from "react-router-dom"
function App() {
 
  return (
   
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="/create" element={<><Create/></>}></Route>
</Routes>
</BrowserRouter>

    
  )
}

export default App
