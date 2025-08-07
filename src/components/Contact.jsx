import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Contact Us</h2>
        <form className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Your Name"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
                <input type="email" placeholder="Your Email"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition" />
            </div>
            <textarea placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition"></textarea>
            <button type="submit"
                className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-400 hover:text-red-700 transition transform hover:scale-105 cursor-pointer">Send
                Message</button>
        </form>
    </div>
  )
}

export default Contact