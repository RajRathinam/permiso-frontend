import LoginPage from "./pages/auth/LoginPage";
import Header from "./pages/afterAuth/Header";
import Profile from "./pages/afterAuth/Profile";
import Footer from "./pages/afterAuth/Footer";
import Dashboard from "./pages/home/Dashboard";
import NotificationPage from "./pages/notifications/NotificationPage";
import GroupOnduty from "./pages/permissions/GroupOnduty";
import SingleOnduty from "./pages/permissions/SingleOnduty";
import LeaveRequest from "./pages/permissions/LeaveRequest";
import RiseComplaint from "./pages/permissions/RiseComplaint"; 
import React, { useState,useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import StaffDashboard from "./pages/home/StaffDashboard";

function App() {
  const [profile, setProfile] = useState(false);
  const [authUser, setAuthUser] = useState('');
  useEffect(() => {
    window.onload = () => {
      const user = localStorage.getItem('authUser');
    if (user) {
      setAuthUser(JSON.parse(user));
    }
    };
  }, []);
  return (
    <div className="relative min-h-screen">
      {authUser&& <Header
        profile={profile}
        setProfile={setProfile}
        authUser={authUser}
        setAuthUser={setAuthUser} />}
      <Routes>
        <Route path='/' element={authUser ? (authUser.userType==="student" ? <Dashboard /> : <StaffDashboard />) : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <LoginPage authUser={authUser}
          setAuthUser={setAuthUser} /> : <Navigate to="/" />} />
        <Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to="/" />} />
        <Route path='/logout' element={<LoginPage />} />
        <Route path='/team-onduty' element={<GroupOnduty />}/>
        <Route path='/single-request' element={<SingleOnduty />}/>
        <Route path='/leave-request' element={<LeaveRequest />}/>
        <Route path='/complaint' element={<RiseComplaint />} />
      </Routes>
      {profile === true && <Profile profile={profile}
        setProfile={setProfile} />}
      {authUser && <Footer />}
    </div>
  )
}

export default App
