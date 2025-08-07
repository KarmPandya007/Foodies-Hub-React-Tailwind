import React from 'react'
import platerphoto from '../assets/platerphoto.jpeg'

const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-red-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">At Foodie's Hub, we believe in serving happiness on every plate. Our
          chefs use the freshest ingredients to craft mouth-watering dishes that will leave you craving for more.
          Join us for a delightful dining experience!</p>
        <img src={platerphoto}
          alt="Restaurant" className="mx-auto rounded-full shadow-lg w-32 h-32 object-cover" />
      </div>
    </div>
  )
}

export default About