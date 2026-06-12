import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewTicket from "./pages/NewTicket";
import Tickets from "./pages/Tickets";
import TrackTicket from "./pages/TrackTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/new-ticket"
          element={<NewTicket />}
        />

        <Route
          path="/tickets"
          element={<Tickets />}
        />

        <Route
          path="/track-ticket"
          element={<TrackTicket />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;