import { BrowserRouter as Router, Routes, Route } from "react-router"
import Header from "@/components/header/Header.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App
