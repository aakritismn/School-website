import React from 'react';

const Faculty = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Faculty Profiles Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 ">Our Faculty</h2>
        
        {/* Teaching Staff */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-semibold mb-2">Teaching Staff</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


            {/* Example Profile 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=0&k=20&c=xweBj18Ra0homW2Vvs20N27F2l6t-sOoYaeW5xdL5n0=" alt="Faculty Member" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Dr. John Smith</h4>
              <p className="text-gray-600">Mathematics Teacher</p>
              <p className="text-lg mt-2">
                Dr. John Smith has over 15 years of experience in teaching Mathematics. He holds a Ph.D. in Mathematics and is passionate about making math accessible and engaging for students.
              </p>
            </div>


            {/* Example Profile 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/1034421614/photo/confident-high-school-teacher.jpg?s=612x612&w=0&k=20&c=UtxCREL2y-c3W8Hezrmw58ULTm29yHFnf6yweGXtgqo=" alt="Faculty Member" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Ms. Emily Johnson</h4>
              <p className="text-gray-600">English Language and Literature</p>
              <p className="text-lg mt-2">
                Ms. Emily Johnson brings a wealth of experience in English Language and Literature. She has a Master's degree in English and has been teaching for over 10 years.
              </p>
            </div>


            {/* Example Profile 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/155599615/photo/school-principal-on-campus.jpg?s=612x612&w=0&k=20&c=P-fv4dWWlH76kbWXbAyJlMPQ3qaj4tK4m-VrV5hwbcw=" alt="Faculty Member" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Mr. Michael Brown</h4>
              <p className="text-gray-600">Science Teacher</p>
              <p className="text-lg mt-2">
                Mr. Michael Brown is a dedicated Science teacher with a Master's degree in Physics. He has over 12 years of experience in teaching and has a strong background in experimental science.
              </p>
            </div>
          </div>
        </div>



        {/* Administrative Staff */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Administrative Staff</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Profile 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/155599615/photo/school-principal-on-campus.jpg?s=612x612&w=0&k=20&c=P-fv4dWWlH76kbWXbAyJlMPQ3qaj4tK4m-VrV5hwbcw=" alt="Admin Staff" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Mrs. Laura Green</h4>
              <p className="text-gray-600">Administrative Manager</p>
              <p className="text-lg mt-2">
                Mrs. Laura Green has been with our institution for over 20 years. She oversees administrative operations and has a background in business administration.
              </p>
            </div>
            {/* Example Profile 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/155599615/photo/school-principal-on-campus.jpg?s=612x612&w=0&k=20&c=P-fv4dWWlH76kbWXbAyJlMPQ3qaj4tK4m-VrV5hwbcw=" alt="Admin Staff" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Mr. David Wilson</h4>
              <p className="text-gray-600">Finance Officer</p>
              <p className="text-lg mt-2">
                Mr. David Wilson is responsible for managing the financial aspects of the school. He has a degree in Accounting and over 15 years of experience in financial management.
              </p>
            </div>
            {/* Example Profile 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://media.gettyimages.com/id/155599615/photo/school-principal-on-campus.jpg?s=612x612&w=0&k=20&c=P-fv4dWWlH76kbWXbAyJlMPQ3qaj4tK4m-VrV5hwbcw=" alt="Admin Staff" className="w-full h-50 object-cover rounded-md mb-4"/>
              <h4 className="text-xl font-semibold">Ms. Aakriti Suman</h4>
              <p className="text-gray-600">Human Resources Coordinator</p>
              <p className="text-lg mt-2">
                Ms. Aakriti Lee manages human resources and employee relations. With a degree in Human Resources Management, she ensures that the staff and faculty have the support they need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faculty;
