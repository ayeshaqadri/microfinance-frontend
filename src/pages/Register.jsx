import { useState } from 'react';
import axios from '../axios'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', cnic: '', location: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Register</h2>
      <input name="name" placeholder="Full Name" className="w-full p-2 border mb-2" onChange={handleChange} required />
      <input name="email" placeholder="Email" className="w-full p-2 border mb-2" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" className="w-full p-2 border mb-2" onChange={handleChange} required />
      <input name="cnic" placeholder="CNIC" className="w-full p-2 border mb-2" onChange={handleChange} required />
      <input name="location" placeholder="Location" className="w-full p-2 border mb-2" onChange={handleChange} required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default Register;
