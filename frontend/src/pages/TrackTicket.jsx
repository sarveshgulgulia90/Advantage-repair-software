import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function TrackTicket() {
  const [ticketId, setTicketId] =
    useState("");

  const [ticket, setTicket] =
    useState(null);

  async function handleTrack() {
    try {
      const res = await api.get(
        `/tickets/track/${ticketId}`
      );

      setTicket(res.data);
    } catch (error) {
      alert("Ticket not found");
      setTicket(null);
    }
  }

  return (
    <MainLayout>

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Track Repair Ticket
        </h1>

        <div className="bg-white p-6 rounded shadow">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter Ticket ID"
              value={ticketId}
              onChange={(e) =>
                setTicketId(e.target.value)
              }
              className="border p-3 flex-1 rounded"
            />

            <button
              onClick={handleTrack}
              className="bg-blue-600 text-white px-6 rounded"
            >
              Track
            </button>

          </div>

        </div>

        {ticket && (

          <div className="bg-white p-6 rounded shadow mt-6">

            <h2 className="text-2xl font-bold mb-4">
              Ticket Details
            </h2>

            <div className="space-y-2">

              <p>
                <strong>Ticket ID:</strong>{" "}
                {ticket.ticketId}
              </p>

              <p>
                <strong>Customer:</strong>{" "}
                {ticket.name}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {ticket.phone}
              </p>

              <p>
                <strong>Device:</strong>{" "}
                {ticket.brand}{" "}
                {ticket.model}
              </p>

              <p>
                <strong>Issue:</strong>{" "}
                {ticket.issueDescription}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {ticket.status}
              </p>

              <p>
                <strong>Preferred Date:</strong>{" "}
                {ticket.preferredDate}
              </p>

            </div>

          </div>

        )}

      </div>

    </MainLayout>
  );
}

export default TrackTicket;