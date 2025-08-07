import React from 'react'
import burgerphoto from '../assets/burgerphoto.jpeg'
import pizzaphoto from '../assets/pizzaphoto.jpeg'
import pastaphoto from '../assets/pastaphoto.jpeg'


const FoodItems = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Our Popular Dishes</h2>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in-up flex-1 min-w-[250px] max-w-sm">
                    <img src={burgerphoto} alt="Burger" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Classic Burger</h3>
                        <p className="text-gray-600 mb-4">Juicy beef patty, fresh veggies, and our secret sauce.</p>
                        <span className="text-red-500 font-bold text-lg">$8.99</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in-up delay-100 flex-1 min-w-[250px] max-w-sm">
                    <img src={pizzaphoto} alt="Pizza" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Margherita Pizza</h3>
                        <p className="text-gray-600 mb-4">Fresh mozzarella, basil, and tomato sauce on a crispy crust.</p>
                        <span className="text-red-500 font-bold text-lg">$12.50</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in-up delay-200 flex-1 min-w-[250px] max-w-sm">
                    <img src={pastaphoto} alt="Pasta" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Creamy Alfredo Pasta</h3>
                        <p className="text-gray-600 mb-4">Rich and creamy Alfredo sauce with fettuccine noodles.</p>
                        <span className="text-red-500 font-bold text-lg">$10.75</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItems