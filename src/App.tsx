import React from 'react';
import { Activity, Dumbbell, Home, LineChart, User } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Activities from './pages/Activities';
import Workouts from './pages/Workouts';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import { FitnessProvider } from './context/FitnessContext';

function App() {
  return (
    <BrowserRouter>
      <FitnessProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-20">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Navigation />
        </div>
      </FitnessProvider>
    </BrowserRouter>
  );
}

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <NavButton to="/" icon={<Home size={24} />} label="Home" active={location.pathname === '/'} />
          <NavButton to="/activities" icon={<Activity size={24} />} label="Activities" active={location.pathname === '/activities'} />
          <NavButton to="/workouts" icon={<Dumbbell size={24} />} label="Workouts" active={location.pathname === '/workouts'} />
          <NavButton to="/progress" icon={<LineChart size={24} />} label="Progress" active={location.pathname === '/progress'} />
          <NavButton to="/profile" icon={<User size={24} />} label="Profile" active={location.pathname === '/profile'} />
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  to: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, to }) => (
  <Link
    to={to}
    className={`flex flex-col items-center space-y-1 ${
      active ? 'text-indigo-600' : 'text-gray-600'
    } hover:text-indigo-600 transition-colors`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </Link>
);

export default App;