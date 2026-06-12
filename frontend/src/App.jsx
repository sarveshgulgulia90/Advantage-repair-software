import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import ProtectedRoute from "./components/ProtectedRoute";
import NewTicket from "./pages/NewTicket";
import TrackTicket from "./pages/TrackTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* CUSTOMER */}

        <Route
          path="/"
          element={<NewTicket />}
        />

        <Route
          path="/track-ticket"
          element={<TrackTicket />}
        />

        {/* ADMIN */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/tickets"
          element={<Tickets />}
        /><Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/tickets"
  element={
    <ProtectedRoute>
      <Tickets />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;