import { Routes, Route } from "react-router-dom";

import Employees from "./pages/Employees";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>

      </div>
    </>
  );
}


function App() {
  return (
    <Routes>

      {/* Authentication */}
      <Route
        path="/"
        element={<Login />}
      />


      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />


      {/* Asset Management */}
      <Route
        path="/assets"
        element={
          <Layout>
            <Assets />
          </Layout>
        }
      />


      {/* Employee Management */}
      <Route
        path="/employees"
        element={
          <Layout>
            <Employees />
          </Layout>
        }
      />


    </Routes>
  );
}


export default App;