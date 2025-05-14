import React from 'react';
import pdf from '../assets/CV.pdf';

const projects = [
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
];

const Homepage = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-gray-700">Yirenkyi Jodi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            A passionate front-end developer dedicated to crafting elegant, minimal, and user-friendly web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:opacity-80 transition-shadow shadow-md"
            >
              View Projects
            </a>
            <a
              href={pdf}
              download
              className="px-8 py-3 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-200 transition-shadow"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed space-y-4">
            I am a passionate front-end developer who enjoys creating modern, responsive, and user-friendly web applications. With a strong foundation in <span className="font-semibold text-gray-900">React</span> and <span className="font-semibold text-gray-900">Tailwind CSS</span>, I combine technical expertise with an eye for clean, accessible design.
            <br /><br />
            I take pride in writing efficient, maintainable code and continuously expanding my knowledge of modern web technologies. My approach is centered on crafting seamless digital experiences that not only look great but also provide real value to users.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Projects</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-5 text-sm text-gray-600">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
                <a href="#" className="text-gray-700 hover:underline font-medium">View Project &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resume</h2>
          <p className="text-lg text-gray-700 mb-6">
            You can view or download my resume to learn more about my education, experience, and technical skills.
          </p>
          <a
            href={pdf}
            download
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-xl hover:opacity-80 shadow-md transition-shadow"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
