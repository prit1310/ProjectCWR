const Services = () => {
    return (
      <div className="mt-16 p-6">
        <h1 className="text-4xl font-bold mb-4">Insurance Services</h1>
        <div className="grid grid-cols-2 gap-6">
          <a href="https://inr.deals/DR71pZ" target="_blank">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md"> 
            <h2 className="text-2xl font-semibold">Two-Wheeler Insurance</h2>
            <p className="text-gray-700">Protect your bike with our comprehensive plans.</p>
          </div>
          </a>
          <a href="https://inr.deals/8cgoK7" target="_blank">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Four-Wheeler Insurance</h2>
            <p className="text-gray-700">Get hassle-free car insurance with easy renewals.</p>
          </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default Services;
  