import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Video from './pages/Video'
import VideoLink from './pages/VideoLink'
import Photo from './pages/Photo'
import Error404 from './pages/Error404'
import './styles/Global.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/VideoLink/:id" element={<VideoLink />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
