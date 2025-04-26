import { useState } from 'react';
import axiosInstance from '../path/to/axiosInstance';
const ApplyLoan = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('https://microfinance-backend-production.up.railway.app/api/loans/create', {
        loanAmount,
        loanPeriod,
        address,
        phoneNumber,
        category,
        subcategory,
        guarantors: [], // agar abhi guarantor nahi pooch rahe to empty array
        statement: '',
        salarySheet: '',
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan application submitted!');
      // Reset form fields
      setLoanAmount('');
      setLoanPeriod('');
      setAddress('');
      setPhoneNumber('');
      setCategory('');
      setSubcategory('');
    } catch (error) {
      console.error(error);
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
  value={loanAmount}
  onChange={(e) => setLoanAmount(e.target.value)}
  required
/>
<input
  type="number"
  placeholder="Loan Period (in years)"
  className="w-full p-2 border mb-4"
  value={loanPeriod}
  onChange={(e) => setLoanPeriod(e.target.value)}
  required
/>
<input
  type="text"
  placeholder="Category"
  className="w-full p-2 border mb-4"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  required
/>
<input
  type="text"
  placeholder="Subcategory"
  className="w-full p-2 border mb-4"
  value={subcategory}
  onChange={(e) => setSubcategory(e.target.value)}
  required
/>
<input
  type="text"
  placeholder="Address"
  className="w-full p-2 border mb-4"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  required
/>
<input
  type="text"
  placeholder="Phone Number"
  className="w-full p-2 border mb-4"
  value={phoneNumber}
  onChange={(e) => setPhoneNumber(e.target.value)}
  required
/>

      <button type="submit" className="bg-green-600 text-white px-4 py-2">Apply</button>
    </form>
  );
};

export default ApplyLoan;
