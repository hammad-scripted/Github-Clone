import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import LikesPage from './pages/LikesPage.jsx';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl mx-auto my-5 text-white  transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
};

export default App;
