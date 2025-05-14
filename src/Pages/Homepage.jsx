import React from 'react';
import pdf from '../assets/CV.pdf';

const Homepage = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Yirenkyi Jodi</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10">
          A passionate front-end developer dedicated to crafting beautiful, responsive, and user-friendly websites & applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg transition-all">
            View Projects
          </a>
          <a href={pdf} download className="px-8 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all">
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg space-y-4">
          I am a passionate front-end developer who enjoys creating modern, responsive, and user-friendly web applications. With a strong foundation in <span className="font-semibold text-blue-600">React</span> and <span className="font-semibold text-blue-600">Tailwind CSS</span>, I combine technical expertise with an eye for clean, accessible design.
          <br /><br />
          I take pride in writing efficient, maintainable code and continuously expanding my knowledge of modern web technologies. My approach is centered on crafting seamless digital experiences that not only look great but also provide real value to users.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>
          <div className="space-y-10">

            {/* Reusable Project Card */}
            {[
              {
                title: 'LockiT - NFC Room Access System',
                desc: 'A mobile and web app system for hotels to allow guests access to rooms via NFC-enabled phones.',
                tech: ['React', 'Tailwind CSS', 'Firebase'],
              },
              {
                title: 'BiteWise - Restaurant Review Website',
                desc: 'A platform where users can discover, review, and rate restaurants in their area.',
                tech: ['React', 'Node.js', 'MySQL'],
              },
              {
                title: 'ConceptMabelles - E-commerce Website',
                desc: 'An online store for African wear, featuring product listings, shopping cart, and secure checkout.',
                tech: ['React', 'Stripe API', 'Tailwind CSS'],
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-5 text-sm text-gray-600">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
                <a href="#" className="inline-block text-blue-600 hover:underline font-medium transition-all">View Project &rarr;</a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Resume</h2>
        <p className="text-gray-700 text-lg mb-6">
          You can view or download my resume to learn more about my education, experience, and technical skills.
        </p>
        <a href={pdf} download className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg transition-all">
          Download Resume (PDF)
        </a>
      </section>

    </div>
  );
}

export default Homepage;
