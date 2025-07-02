import { BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from "@/components/layout/Layout.jsx"
import Main from "@/pages/Main.jsx"
import ProjectDetail from "@/pages/ProjectDetail.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="projects/:name" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
