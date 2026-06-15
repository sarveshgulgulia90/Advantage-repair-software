import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import api from "../services/api";

function Technicians() {
  const [technicians, setTechnicians] =
    useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    specialization: "",
  });

  useEffect(() => {
    fetchTechnicians();
  }, []);

  async function fetchTechnicians() {
    try {
      const res = await api.get(
        "/technicians"
      );

      setTechnicians(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post(
        "/technicians",
        form
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        specialization: "",
      });

      fetchTechnicians();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTechnician(id) {
    const confirmDelete =
      window.confirm(
        "Delete this technician?"
      );

    if (!confirmDelete) return;

    try {
      await api.delete(
        `/technicians/${id}`
      );

      fetchTechnicians();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-6">
        Technician Management
      </h1>

      <div className="bg-white p-6 rounded shadow mb-6">

        <h2 className="text-xl font-bold mb-4">
          Add Technician
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            placeholder="Technician Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Specialization"
            value={form.specialization}
            onChange={(e) =>
              setForm({
                ...form,
                specialization:
                  e.target.value,
              })
            }
            className="border p-3 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded"
          >
            Add Technician
          </button>

        </form>

      </div>

      <div className="bg-white rounded shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Phone
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Specialization
              </th>

              <th className="p-3 text-left">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {technicians.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-6 text-center text-gray-500"
                >
                  No technicians found
                </td>
              </tr>
            ) : (
              technicians.map(
                (tech) => (
                  <tr
                    key={tech._id}
                    className="border-t"
                  >

                    <td className="p-3">
                      {tech.name}
                    </td>

                    <td className="p-3">
                      {tech.phone}
                    </td>

                    <td className="p-3">
                      {tech.email}
                    </td>

                    <td className="p-3">
                      {
                        tech.specialization
                      }
                    </td>

                    <td className="p-3">

                      <button
                        onClick={() =>
                          deleteTechnician(
                            tech._id
                          )
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )
            )}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Technicians;