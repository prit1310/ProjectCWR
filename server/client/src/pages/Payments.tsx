import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/bankDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Bank details submitted successfully");
        setFormData({
          bankName: "",
          accountHolder: "",
          accountNumber: "",
          ifscCode: "",
          upiId: "",
        });
        navigate("/");
      } else {
        toast.error(responseData.message || "Failed to submit details");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 overflow-hidden flex justify-center items-center pt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Bank Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter bank name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Account Holder Name</label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter account holder name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter account number"
              required
            />
          </div>

          <div>
            <label className="block font-medium">IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter IFSC code"
              required
            />
          </div>

          <div>
            <label className="block font-medium">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter UPI ID"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Go back to{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline"
          >
            Home
          </button>
        </p>
      </div>
    </div>
  );
};

export default Payments;
