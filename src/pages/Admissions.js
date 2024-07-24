import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Admission Process and Criteria */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Admission Process and Criteria</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Admission Process</h3>
          <p className="text-lg mb-4">
            Our admission process is designed to be transparent and straightforward. Prospective students and their parents should follow these steps to apply:
          </p>
          <ol className="list-decimal list-inside pl-5">
            <li>Fill out the online application form on our website.</li>
            <li>Submit the required documents, including previous academic records, proof of residence, and identification.</li>
            <li>Attend an interview or entrance exam, if applicable.</li>
            <li>Receive admission offer and complete the enrollment process.</li>
          </ol>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Admission Criteria</h3>
          <p className="text-lg">
            To be considered for admission, students must meet the following criteria:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Completion of the previous grade or educational level with satisfactory performance.</li>
            <li>Submission of all required documents.</li>
            <li>Successful completion of any required entrance exams or interviews.</li>
            <li>Compliance with age requirements for the respective grade level.</li>
          </ul>
        </div>
      </section>

      {/* Downloadable Admission Forms */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Downloadable Admission Forms</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Below are the links to download the admission forms. Please download and complete the form relevant to the grade level you are applying for.
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>
              <a href="/forms/primary_admission_form.pdf" className="text-blue-500 hover:underline">
                Primary Admission Form
              </a>
            </li>
            <li>
              <a href="/forms/secondary_admission_form.pdf" className="text-blue-500 hover:underline">
                Secondary Admission Form
              </a>
            </li>
            <li>
              <a href="/forms/senior_secondary_admission_form.pdf" className="text-blue-500 hover:underline">
                Senior Secondary Admission Form
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Important Dates and Deadlines */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Important Dates and Deadlines</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Make sure to mark these important dates on your calendar to ensure you complete the admission process on time.
          </p>
          <ul className="list-disc list-inside pl-5">
            <li><strong>Application Period:</strong> January 1 - March 31</li>
            <li><strong>Entrance Exams/Interviews:</strong> April 15 - April 30</li>
            <li><strong>Admission Offers:</strong> May 15</li>
            <li><strong>Enrollment Deadline:</strong> June 15</li>
            <li><strong>Start of Academic Year:</strong> July 1</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
