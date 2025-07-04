import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
