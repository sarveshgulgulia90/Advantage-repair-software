function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          Repair Management System
        </h1>
      </header>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;