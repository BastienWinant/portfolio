import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Layout from "@/components/layout/Layout.jsx"
import Home  from "@/pages/Home.jsx"
import ProjectDetail from "@/pages/ProjectDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="test"  element={<h1>this is the test page</h1>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
