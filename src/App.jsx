import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Graveyard from './pages/Graveyard'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/graveyard" element={<Graveyard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App
