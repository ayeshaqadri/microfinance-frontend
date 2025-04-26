import { useEffect, useState } from 'react';
import axios from 'axios';

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/loans', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLoans(res.data);
      } catch (error) {
        console.error('Error fetching loans', error);
      }
    };
    fetchLoans();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl mb-4">My Loan Applications</h2>
      {loans.map((loan) => (
        <div key={loan._id} className="p-4 mb-2 border rounded bg-gray-50">
          <p><strong>Amount:</strong> {loan.amount}</p>
          <p><strong>Reason:</strong> {loan.reason}</p>
          <p><strong>Status:</strong> {loan.status}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanList;
