import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import CoursePage from './pages/CoursePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursePage />} />
        <Route path="/course/higher-national-diploma-computing-engineering" element={<CoursePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;