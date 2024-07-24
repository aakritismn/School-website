import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the carousel
const carouselData = [ 
  {
    id: 1 ,
    img: "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Annual Sports Day ",
    description: " Celebrating Excellence in Sports",
  },
  {
    id: 2,
    img: "https://t3.ftcdn.net/jpg/07/78/52/90/240_F_778529063_W7tyskBIQq9FHhCtthO1X5VpBsTtH7vo.jpg",
    title: "Science Exhibition",
    description: "Showcasing Student Innovations",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_1280.jpg",
    title: "Cultural Fest ",
    description: "Embracing Diversity and Creativity",
  },
];

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://i.ytimg.com/vi/VZgnPcMeLf4/hqdefault.jpg"
            alt="School Logo"
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h1>
            <p className="text-lg">
              Our school is committed to providing the best education and
              fostering a positive learning environment. We offer a range of
              programs designed to help students excel academically and
              personally.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          School Fest
        </h2>
        <Slider {...carouselSettings}>
          {carouselData.map((item) => (
            <div key={item.id} className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-4"> Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/about"
            className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-blue-600"
          >
            About Us
          </a>
          <a
            href="/academics"
            className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-green-600"
          >
            Academics
          </a>
          <a
            href="/admissions"
            className="bg-red-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-red-600"
          >
            Admissions
          </a>
          <a
            href="/faculty"
            className="bg-purple-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-purple-600"
          >
            Faculty
          </a>
          <a
            href="/students"
            className="bg-orange-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-orange-600"
          >
            Students
          </a>
          <a
            href="/gallery"
            className="bg-teal-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-teal-600"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="bg-indigo-500 text-white p-4 rounded-lg shadow-md text-center hover:bg-indigo-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
