import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile2.jpg';
import riteshCV from '../../assets/cv/Ritesh_Sahani_CV.pdf';


const About = () => {
  return (
    <section id="about" data-reveal className="py-16 page-container">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:hidden flex justify-center w-full">
          <img src={profileImage} alt="Ritesh" className="w-40 h-40 rounded-full object-cover shadow" />
        </div>

        <div className="md:flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text)] text-center md:text-left">Hi, I am</h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-center md:text-left">
            <span className="text-[var(--accent)]">Ritesh Sahani</span>
          </h2>

          <h3 className="mt-4 text-lg text-[var(--muted)] text-center md:text-left">
            <span className="text-[var(--text)]">I build</span>{' '}
            <ReactTypingEffect
              text={["web applications", "product interfaces", "reliable systems"]}
              speed={80}
              eraseSpeed={40}
              typingDelay={400}
              eraseDelay={1800}
              cursorRenderer={(c) => <span className="text-[var(--accent)]">{c}</span>}
            />
          </h3>

          <p className="mt-6 text-[var(--muted)] max-w-xl leading-relaxed text-center md:text-left">
            Hello, I’m a Computer Engineering pass out from TU,IOE Purwanchal Campus, Dharan with in depth understanding of computer
            fundamental include OS, DBMS, DSA, Network , Artificial Intelligence & Machine Learning . In addition I also have some
            experience working with the latest tech stacks to build systems. I would also like to introduce myself as a quick learner, team
            player and a motivated engineer. I’m currently looking for internships and fresher jobs.
          </p>

          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            <a href="#contact" className="inline-flex items-center rounded-md bg-[var(--accent)] text-white px-4 py-2 text-sm font-medium">Get in touch</a>
            <a href= {riteshCV} download="rs_CV.pdf" className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm">Download CV</a>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/3 justify-center">
          <img src={profileImage} alt="Ritesh" className="w-56 h-56 rounded-full object-cover shadow" />
        </div>
      </div>
    </section>
  );
};

export default About;
