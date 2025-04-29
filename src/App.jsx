import { BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from "@/components/layout/Layout.jsx"
import Main from "@/pages/main.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
