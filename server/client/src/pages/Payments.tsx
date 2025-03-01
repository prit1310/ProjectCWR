const Payments = () => {
    return (
      <div className="mt-16 p-6">
      <h1 className="text-4xl font-bold mb-4">Payments Services</h1>
      <div className="grid grid-cols-2 gap-6">
        <a href="https://inr.deals/LVRHTM" target="_blank">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"> 
          <h2 className="text-2xl font-semibold">Credit Card</h2>
          <p className="text-gray-700">HDFC Bank</p>
        </div>
        </a>
        <a href="https://inr.deals/iL4qEf" target="_blank">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Credit Card</h2>
          <p className="text-gray-700">SBI Bank</p>
        </div>
        </a>
      </div>
    </div>
    );
  };
  
  export default Payments;
  