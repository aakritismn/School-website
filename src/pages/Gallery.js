import React, { useState } from 'react';

// Sample data for gallery items
const galleryItems = [
  { id: 1, type: 'Event', date: '2024-01-15', src: 'https://media.gettyimages.com/id/1408304009/photo/group-of-anonymous-people-raising-hands-on-a-seminar.jpg?s=612x612&w=0&k=20&c=Ya1IzaAwQl-3TwXlNisnBPvC-MK6-v5gKvYYzOPKYiU=', alt: 'School Event 1' },
  { id: 2, type: 'Activity', date: '2024-02-20', src: 'https://media.gettyimages.com/id/539281953/photo/outdoor-games.jpg?s=612x612&w=0&k=20&c=R3oB_WFUbr1z6ERtiu2GqijGD1Cj8sM0TcJoXkR6yc4=', alt: 'School Activity 1' },
  { id: 3, type: 'Infrastructure', date: '2024-03-10', src: 'https://media.gettyimages.com/id/1346503960/photo/school-children-with-a-parachute.jpg?s=612x612&w=0&k=20&c=4BjEbe6hdVjfRsAXXc9N7NJbjt7g0KbBq61fahOddMk=', alt: 'School Infrastructure 1' },
  { id: 4, type: 'Event', date: '2024-04-05', src: 'https://media.gettyimages.com/id/1005282482/photo/large-group-of-elementary-students-having-an-art-class-in-the-classroom.jpg?s=612x612&w=0&k=20&c=6141RFZjv_WlL-p4fVl15DV9zpSpJPnWnms6e-Mr_zI=', alt: 'School Event 2' },
  { id: 5, type: 'Activity', date: '2024-05-12', src: 'https://media.gettyimages.com/id/535723971/photo/smiling-girl-missing-a-tooth-with-a-healthy-lunch.jpg?s=612x612&w=0&k=20&c=ctn34xy_S4vRTqTmXVBUZ6nCw5WB1RNeW6r9WRWvYgA=', alt: 'School Activity 2' },
  { id: 6, type: 'Infrastructure', date: '2024-06-25', src: 'https://media.gettyimages.com/id/1146902501/photo/school-children-jumping-and-celebrating-in-school-campus.jpg?s=612x612&w=0&k=20&c=rSETssGcQbFELUNmMAMNRSloiqMeB5noBfCIfgOkAVQ=', alt: 'School Infrastructure 2' },
  // Add more items as needed
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.type === filter);

  return (
    <div className="container mx-auto p-4">
      {/* Filtering Options */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <div className="flex space-x-4 mb-4">
          <button 
            onClick={() => setFilter('All')} 
            className={`px-4 py-2 rounded-lg ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('Event')} 
            className={`px-4 py-2 rounded-lg ${filter === 'Event' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Events
          </button>
          <button 
            onClick={() => setFilter('Activity')} 
            className={`px-4 py-2 rounded-lg ${filter === 'Activity' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Activities
          </button>
          <button 
            onClick={() => setFilter('Infrastructure')} 
            className={`px-4 py-2 rounded-lg ${filter === 'Infrastructure' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Infrastructure
          </button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">{item.date}</p>
                <p className="text-lg font-semibold mt-2">{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
