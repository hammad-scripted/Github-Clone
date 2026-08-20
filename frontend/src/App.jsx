import React from 'react';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
