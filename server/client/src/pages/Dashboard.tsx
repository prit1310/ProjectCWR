const Dashboard = () => {
    return (
      <div className="mt-16 p-6">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Total Policies</h2>
            <p className="text-gray-700">10 Active Policies</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Pending Payments</h2>
            <p className="text-gray-700">$1200 Due</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  