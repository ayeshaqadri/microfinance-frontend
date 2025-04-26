import { useState } from 'react';
import axios from 'axios';

const ApplyLoan = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/loans/create', { amount, reason }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan application submitted!');
      setAmount('');
      setReason('');
    } catch (error) {
      console.error(error); // Error console me bhi dekhna helpful hoga
      alert('Failed to apply for loan');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Apply for a Loan</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        className="w-full p-2 border mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Reason"
        className="w-full p-2 border mb-4"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Apply</button>
    </form>
  );
};

export default ApplyLoan;
