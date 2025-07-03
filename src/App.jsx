import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Header from "@/components/header/header.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route index  element={<h1>this is the home page</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
