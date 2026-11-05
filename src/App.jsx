import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Research from "./pages/Research.jsx"
import Teaching from "./pages/Teaching.jsx"
import Experience from "./pages/Experience.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />

        {/* Preserve older page addresses */}
        <Route
          path="/publications"
          element={<Navigate to="/research" replace />}
        />
        <Route
          path="/cv"
          element={<Navigate to="/experience" replace />}
        />
        <Route
          path="/events"
          element={<Navigate to="/research" replace />}
        />
        <Route
          path="/articles"
          element={<Navigate to="/research" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
