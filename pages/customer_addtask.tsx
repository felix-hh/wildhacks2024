// customer_addtask.tsx

import { useState } from 'react';

import Navbar from '../components/Navbar';

const AddTaskPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullAddress: '',
    budget: '',
    duration: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    title: false,
    fullAddress: false,
    budget: false,
    description: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name] && value.trim() !== '') {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = true;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', formData);
      setFormData({
        title: '',
        fullAddress: '',
        budget: '',
        duration: '',
        description: ''
      });
      setErrors({
        title: false,
        fullAddress: false,
        budget: false,
        description: false
      });
    }
  };

  return (
    <>
    
    <Navbar />
  
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.title && <span className="text-red-500">Title is required</span>}
        </div>
        <div className="mb-4">
          <label className="block font-bold">Full Address *</label>
          <input
            type="text"
            name="fullAddress"
            value={formData.fullAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.fullAddress && <span className="text-red-500">Full Address is required</span>}
        </div>
        <div className="mb-4">
          <label className="block font-bold">Budget *</label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.budget && <span className="text-red-500">Budget is required</span>}
        </div>
        <div className="mb-4">
          <label className="block font-bold">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.description && <span className="text-red-500">Description is required</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AddTaskPage;
