import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/admin/loans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoans(res.data);
    };
    fetchLoans();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/admin/loans/${id}`, { status: action }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan status updated');
      window.location.reload();
    } catch (error) {
      alert('Failed to update loan');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl mb-4">Admin Panel - Manage Loans</h2>
      {loans.map((loan) => (
        <div key={loan._id} className="p-4 mb-2 border rounded bg-gray-100">
          <p><strong>User:</strong> {loan.user.name}</p>
          <p><strong>Amount:</strong> {loan.amount}</p>
          <p><strong>Reason:</strong> {loan.reason}</p>
          <p><strong>Status:</strong> {loan.status}</p>
          <button onClick={() => handleAction(loan._id, 'approved')} className="bg-green-500 text-white px-2 py-1 mr-2">Approve</button>
          <button onClick={() => handleAction(loan._id, 'rejected')} className="bg-red-500 text-white px-2 py-1">Reject</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
