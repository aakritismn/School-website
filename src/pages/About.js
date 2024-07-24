import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      {/* History, Vision, Mission, and Values */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About Our School</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">History</h3>
          <p className="text-lg">
            Our school was established in 1985 with the goal of providing quality education to students from all backgrounds. Over the years, we have grown into a renowned institution known for our commitment to excellence in education.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-lg">
            Our vision is to be a leader in education, inspiring students to reach their full potential and become leaders in their communities.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-lg">
            Our mission is to provide a comprehensive education that fosters academic achievement, personal growth, and a lifelong love of learning.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Values</h3>
          <p className="text-lg">
            We value integrity, respect, responsibility, and excellence. Our goal is to create a nurturing environment where students are encouraged to develop these values and apply them in their daily lives.
          </p>
        </div>
      </section>

      {/* Message from the Principal */}
      <section className="mb-8">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Message from the Principal</h2>
          <p className="text-lg">
            Dear Parents and Students,
          </p>
          <p className="text-lg mb-4">
            Welcome to Springdale Public School. As the Principal, I am honored to lead an institution that is dedicated to providing an outstanding education to our students. Our commitment to academic excellence and holistic development ensures that every child receives the support and guidance they need to succeed.
          </p>
          <p className="text-lg">
            We believe in creating a positive and inclusive environment where every student feels valued and empowered to achieve their best. I invite you to explore our website and learn more about the programs and opportunities available at our school.
          </p>
          <p className="text-lg">
            Sincerely,<br />
            Aakriti Suman<br />
            Principal
          </p>
        </div>
      </section>

      {/* Infrastructure and Facilities */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Infrastructure and Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Classrooms</h3>
            <p className="text-lg">
              Our classrooms are equipped with modern technology and are designed to provide a comfortable and conducive learning environment.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Library</h3>
            <p className="text-lg">
              The library offers a vast collection of books and resources to support students' learning and research needs.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Sports Facilities</h3>
            <p className="text-lg">
              Our sports facilities include a gymnasium, playgrounds, and fields for various sports and physical activities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Laboratories</h3>
            <p className="text-lg">
              We have state-of-the-art laboratories for science, computer studies, and other subjects to enhance practical learning.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Cafeteria</h3>
            <p className="text-lg">
              Our cafeteria provides healthy and nutritious meals for students throughout the day.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Health Services</h3>
            <p className="text-lg">
              We have a dedicated health center with professional staff to take care of students' health and wellness needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
