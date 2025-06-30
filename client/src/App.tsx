import Login from "./pages/Login"
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='one' element={<Login />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
