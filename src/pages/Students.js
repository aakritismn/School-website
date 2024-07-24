import React from 'react';

const Students = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Student Life Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Student Life</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Extracurricular Activities</h3>
          <p className="text-lg mb-4">
            Our school offers a variety of extracurricular activities that cater to different interests and talents. Students can participate in:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Sports teams (e.g., soccer, basketball, swimming)</li>
            <li>Arts and drama clubs</li>
            <li>Music and band groups</li>
            <li>Debate and public speaking teams</li>
            <li>Community service and volunteering projects</li>
            <li>Science and technology clubs</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Clubs and Societies</h3>
          <p className="text-lg">
            Our school has a range of clubs and societies that students can join to enhance their skills and explore their interests. These include:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Literary Club</li>
            <li>Environmental Club</li>
            <li>Robotics Club</li>
            <li>Photography Club</li>
            <li>History Society</li>
            <li>Student Newspaper</li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Student Achievements and Accolades</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Our students have a history of excellence in various fields. Here are some of their notable achievements:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>First place in the National Science Olympiad</li>
            <li>Winner of the State-Level Debating Competition</li>
            <li>Top rankings in regional and national sports events</li>
            <li>Gold medals in national-level arts and crafts exhibitions</li>
            <li>Recognition for outstanding community service projects</li>
          </ul>
        </div>
      </section>

      {/* Student Council Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Student Council and Leadership Opportunities</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Student Council</h3>
          <p className="text-lg mb-4">
            The Student Council plays a crucial role in representing the student body and organizing various school activities. Members of the Student Council are elected by their peers and work on:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Planning and executing school events</li>
            <li>Voicing student concerns and suggestions</li>
            <li>Coordinating with school administration</li>
            <li>Organizing fundraisers and community outreach</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2 mt-4">Leadership Opportunities</h3>
          <p className="text-lg">
            Students are encouraged to take on leadership roles through various programs, such as:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Peer mentoring and tutoring programs</li>
            <li>Leadership training workshops</li>
            <li>Organizing and leading student clubs</li>
            <li>Participating in student-led initiatives and projects</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Students;
