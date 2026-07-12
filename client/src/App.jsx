import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <>
            <Navbar />
            <div style={{ display: "flex" }}>
              <Sidebar />
              <Dashboard />
            </div>
          </>
        }
      />

      {/* Assets Page */}
      <Route
        path="/assets"
        element={
          <>
            <Navbar />
            <div style={{ display: "flex" }}>
              <Sidebar />
              <Assets />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;