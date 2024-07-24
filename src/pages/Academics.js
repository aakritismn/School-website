import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Curriculum Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Curriculum</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Primary Education</h3>
          <p className="text-lg">
            Our primary education curriculum focuses on foundational skills in literacy, numeracy, and social development. We emphasize a child-centered approach that encourages curiosity and a love of learning.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Secondary Education</h3>
          <p className="text-lg">
            The secondary curriculum builds on primary education with a stronger focus on critical thinking, problem-solving, and subject-specific knowledge. Students explore various subjects and prepare for higher education or vocational training.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Senior Secondary Education</h3>
          <p className="text-lg">
            Our senior secondary curriculum is designed to prepare students for college or university. It includes advanced coursework in core subjects, electives, and preparation for standardized tests.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Subjects Offered</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Primary Level</h3>
          <ul className="list-disc list-inside pl-5">
            <li>Mathematics</li>
            <li>English Language</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Arts and Crafts</li>
            <li>Physical Education</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Secondary Level</h3>
          <ul className="list-disc list-inside pl-5">
            <li>Mathematics</li>
            <li>English Language and Literature</li>
            <li>Biology</li>
            <li>Chemistry</li>
            <li>Physics</li>
            <li>History</li>
            <li>Geography</li>
            <li>Computer Science</li>
            <li>Physical Education</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Senior Secondary Level</h3>
          <ul className="list-disc list-inside pl-5">
            <li>Advanced Mathematics</li>
            <li>Advanced English</li>
            <li>Biology (Advanced)</li>
            <li>Chemistry (Advanced)</li>
            <li>Physics (Advanced)</li>
            <li>Economics</li>
            <li>Business Studies</li>
            <li>Psychology</li>
            <li>Political Science</li>
            <li>Physical Education (Advanced)</li>
          </ul>
        </div>
      </section>

      {/* Methodologies and Resources Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Teaching Methodologies and Resources</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Teaching Methodologies</h3>
          <p className="text-lg">
            We employ a variety of teaching methodologies to cater to diverse learning styles. These include project-based learning, collaborative group work, hands-on activities, and technology-enhanced instruction. Our goal is to engage students and foster critical thinking and problem-solving skills.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Educational Resources</h3>
          <p className="text-lg">
            Our educational resources include state-of-the-art classrooms, well-equipped laboratories, a comprehensive library, and digital learning tools. We also provide access to online resources and learning platforms to support student research and learning beyond the classroom.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Academics;
