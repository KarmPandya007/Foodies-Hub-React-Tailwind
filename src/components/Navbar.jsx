import React from 'react'

const Navbar = () => {
    return (
        <div class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
            <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <span class="text-3xl font-bold text-white">🍔</span>
                    <span class="text-2xl font-bold text-white">Foodie's Hub</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-white font-semibold hover:text-yellow-200 transition">Home</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-200 transition">Menu</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-200 transition">About</a>
                    <a href="#" class="text-white font-semibold hover:text-yellow-200 transition">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar