import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <div className="bg-white rounded-xl shadow p-10 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Advantage Repair Services
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Professional Laptop, Desktop & Printer Repair
        </p>

        <div className="flex justify-center gap-4 mb-10">

          <Link
            to="/new-ticket"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Book Repair
          </Link>

          <Link
            to="/track-ticket"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Track Ticket
          </Link>


        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              Laptop Repair
            </h2>

            <p>
              Screen, keyboard, battery,
              motherboard and software repairs.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              Desktop Repair
            </h2>

            <p>
              Hardware upgrades,
              troubleshooting and maintenance.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              Printer Repair
            </h2>

            <p>
              Inkjet and laser printer
              repair and servicing.
            </p>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Home;