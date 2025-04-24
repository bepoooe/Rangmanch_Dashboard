/*!
=========================================================
* Rangmanch AI Dashboard - v1.0.0
=========================================================
* Project: AI-Powered Content Engine Dashboard
*/
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Renamed from Home to Dashboard
import ContentLibrary from './pages/ContentLibrary'; // New page
import Analytics from './pages/Analytics'; // New page
import AudienceInsights from './pages/AudienceInsights'; // New page
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Changed component to Dashboard */}
        <Route path="/content-library" element={<ContentLibrary />} /> {/* New Route */}
        <Route path="/analytics" element={<Analytics />} /> {/* New Route */}
        <Route path="/audience-insights" element={<AudienceInsights />} /> {/* New Route */}
        <Route path="/profile" element={<Profile />} />
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />          
      </Routes>
    </div>
  );
}

export default App;
