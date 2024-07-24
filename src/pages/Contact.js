import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Contact Information Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-2">Our Address</h3>
          <p className="text-lg mb-2">
          Springdale Public School<br />
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <h3 className="text-2xl font-semibold mb-2">Contact Numbers</h3>
          <p className="text-lg mb-2">
            Phone:+1 (123) 456-7890
          </p>
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p className="text-lg">
            Email: info@springdale.edu
          </p>
        </div>
        
        {/* Google Maps Integration */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Find Us on the Map</h3>
          <div className="w-full h-64">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292703807685!2d-122.08172848468122!3d37.38747497983178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c79127c5e3%3A0x9b7d6c2ebf743dc4!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094030%2C%20USA!5e0!3m2!1sen!2sin!4v1632096140714!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className='w-50'>
        <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
        {formSubmitted && (
          <p className="text-green-500 mb-4">Thank you for your message! We will get back to you soon.</p>
        )}
        <form onSubmit={handleSubmit} className="bg-gray-100 w-[50vw] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4 px-40 py-30">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
