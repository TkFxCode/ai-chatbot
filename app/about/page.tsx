import React from 'react'
// Assuming your CSS is properly imported
// import './About.css';

const About = () => {
  // Define the team members data
  const teamMembers = [
    {
      name: 'Matthew Magadza',
      role: 'Python Developer and Project Manager',
      email: 'matt.magadza@gmail.com',
      imgSrc: 'Matthew.jpg'
    },
    {
      name: 'Kaelin',
      role: 'Lead Frontend Developer',
      email: '',
      imgSrc: 'kalien.jpg'
    },
    {
      name: 'Mohamed Aasif Rahman',
      role: 'Frontend Developer',
      email: 'aasifr781@gmail.com',
      imgSrc: 'Mohammed.jpg'
    },
    {
      name: 'Rohin Harilal',
      role: 'Frontend Developer',
      email: 'rohinharilal@gmail.com',
      imgSrc: 'Rohin.jpg'
    },
    {
      name: 'Nicole Skosana',
      role: 'Lead Web Design',
      email: '',
      imgSrc: 'Nicole.jpg'
    },
    {
      name: 'Lerato Zwane',
      role: 'Frontend Developer/Web Designer',
      email: '',
      imgSrc: 'lerato.jpg'
    },
    {
      name: 'Palesa Mtshali',
      role: 'Web Designer/Frontend Developer',
      email: 'palesatholwana06@gmail.com',
      imgSrc: 'Palesaa.jpg'
    },
    {
      name: 'Tarik Lutge',
      role: 'Fullstack Developer/Artificial Intelligence (AI) Engineer',
      email: '',
      imgSrc: 'Tarik.jpg'
    }
  ]

  return (
    <div>
      <header className="header">
        <nav className="navbar ">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/about">About</a>
          <a href="/contactme">Contact me</a>
        </nav>
      </header>
      <div className="bg-gray-800 text-white text-center p-12">
        <h1 className="text-4xl mb-3">About Us Page</h1>
        <img src="/logo.jpg" alt="Our Logo" className="mx-auto w-1/5" />
        <p className="mt-4">
          Hey there! Were Lerner AI, a cool chatbot based in Johannesburg (in
          the Sandton area in Bryanston) that aims to create an AI-powered
          assistant to help students with their research and studying.
          <br />
          Our chatbot will act as a guide, tutor, and quiz master, with
          information sourced from the best academic blogs on the web.
        </p>
      </div>
      <h2 className="text-center text-2xl my-8">Our Team</h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={member.imgSrc} alt={member.name} className="w-full" />
              <div className="p-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p>{member.email || 'Email not provided'}</p>
                <button className="mt-4 bg-black text-white w-full py-2 rounded hover:bg-gray-700 transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
