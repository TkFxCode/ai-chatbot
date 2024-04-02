import React from 'react'

const ContactMe = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/4642674.jpg)'
      }}
    >
      <div className="absolute top-0 left-0 size-full bg-black opacity-80"></div>

      <header className="fixed top-0 left-0 w-full py-5 px-20 bg-transparent flex items-center z-50">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/about">About</a>
          <a href="/contactme">Contact me</a>
        </nav>
      </header>

      <section className="relative z-30 p-12 text-white container mx-auto flex flex-wrap justify-between">
        <div className="section-header mb-12 text-center w-full">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p>Get in touch with us for any queries.</p>
        </div>

        <div className="contact-info w-full md:w-1/2">
          <div className="contact-info-item flex mb-6">
            {/* Icon Placeholder */}
            <div className="contact-info-icon bg-white text-center rounded-full opacity-0"></div>
            <div className="contact-info-content ml-5">
              <h4 className="text-lg text-teal-400">Address</h4>
              <p>123, Some Street, City</p>
            </div>
          </div>{' '}
          <div className="contact-info-item flex mb-6">
            {/* Icon Placeholder */}
            <div className="contact-info-icon bg-white text-center rounded-full opacity-0"></div>
            <div className="contact-info-content ml-5">
              <h4 className="text-lg text-teal-400">Phone</h4>
              <p>060-557-4403</p>
            </div>
          </div>{' '}
          <div className="contact-info-item flex mb-6">
            {/* Icon Placeholder */}
            <div className="contact-info-icon bg-white text-center rounded-full opacity-0"></div>
            <div className="contact-info-content ml-5">
              <h4 className="text-lg text-teal-400">Email</h4>
              <p>learner_ai@yahoo.com</p>
            </div>
          </div>
          {/* Repeat for other info items */}
        </div>

        <div className="contact-form bg-white bg-opacity-70 p-10 w-full md:w-2/5">
          <h2 className="font-bold text-2xl mb-4 text-gray-800">
            Send a Message
          </h2>
          {/* Contact form fields */}
          <form>
            <div className="input-box mb-4">
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-800 bg-transparent p-2 focus:outline-none focus:border-pink-500"
              />
              <span className="text-gray-600">Name</span>
            </div>{' '}
            <div className="input-box mb-4">
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-800 bg-transparent p-2 focus:outline-none focus:border-pink-500"
              />
              <span className="text-gray-600">Email</span>
            </div>{' '}
            <div className="input-box mb-4">
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-800 bg-transparent p-2 focus:outline-none focus:border-pink-500"
              />
              <span className="text-gray-600">Message</span>
            </div>
            {/* Repeat for other form fields */}
            <input
              type="submit"
              value="Send"
              className="w-full bg-teal-500 text-white p-3 mt-4 hover:bg-white hover:text-teal-500 border border-teal-500 transition-colors"
            />
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactMe
