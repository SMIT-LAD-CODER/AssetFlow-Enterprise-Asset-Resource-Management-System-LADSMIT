import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Assets from "./pages/Assets";
import ActivityLog from "./pages/ActivityLog";
import Departments from "./pages/Departments";
import Bookings from "./pages/Bookings";
import Maintenance from "./pages/Maintenance";
import AICopilot from "./components/AICopilot";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f8fafc",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </div>

      {/* Floating AI Assistant */}
      <AICopilot />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Employees */}
      <Route
        path="/employees"
        element={
          <Layout>
            <Employees />
          </Layout>
        }
      />

      {/* Assets */}
      <Route
        path="/assets"
        element={
          <Layout>
            <Assets />
          </Layout>
        }
      />

      {/* Activity Log */}
      <Route
        path="/activity"
        element={
          <Layout>
            <ActivityLog />
          </Layout>
        }
      />

      {/* Departments */}
      <Route
        path="/departments"
        element={
          <Layout>
            <Departments />
          </Layout>
        }
      />

      {/* Bookings */}
      <Route
        path="/bookings"
        element={
          <Layout>
            <Bookings />
          </Layout>
        }
      />

      {/* Maintenance */}
      <Route
        path="/maintenance"
        element={
          <Layout>
            <Maintenance />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;