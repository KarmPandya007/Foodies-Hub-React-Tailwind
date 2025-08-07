import React from 'react'

const Intro = () => {
    return (
        <div>
            <div class="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 py-30 px-4">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in-down">Welcome to Foodie's
                        Hub</h1>
                    <p class="text-lg md:text-2xl text-gray-600 mb-8 animate-fade-in-up">Delicious meals, cozy vibes, and
                        unforgettable experiences. Taste the difference today!</p>
                    <a href="#"
                        class="inline-block bg-red-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:text-red-700 transition transform hover:scale-105 animate-pulse">Order
                        Now</a>
                </div>
            </div>
        </div>
    )
}

export default Intro