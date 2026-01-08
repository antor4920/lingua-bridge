import antor from "../../assets/Antor.jpg"
import rounan from "../../assets/Rounan.jpeg"
import yousuf from "../../assets/Yousuf.jpg"
import bishal from "../../assets/bishal.jpg"
import mitu from "../../assets/mitu.jpg"
import suraj from "../../assets/suraj.jpg"
import bipana from "../../assets/bipana.jpg"




export default function About() {
  
  return (
    
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About LinguaBridge</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          LinguaBridge is a collaborative learning platform designed to support students who are new to Japanese while also providing opportunities for Japanese-proficient students to strengthen their language skills through real interaction. By connecting learners at different proficiency levels, we promote mutual learning, cultural exchange, and inclusive education in line with the United Nations Sustainable Development Goals.
        </p>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to create an inclusive learning environment where students with different levels of Japanese proficiency can support one another. We aim to help beginners build confidence in Japanese while enabling advanced learners to improve their communication skills through meaningful practice, contributing to quality education and equal learning opportunities.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
          Our vision is a learning community where language is no longer a barrier to participation, collaboration, or opportunity. By encouraging peer learning and cross-cultural communication, we seek to support sustainable development, inclusivity, and global understanding in accordance with the United Nations Sustainable Development Goals.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>

        <div className="space-y-8 border-l-4 border-blue-600 pl-6">
          {[
            {
              year: "October 30, 2025",
              text: "Discussion group established",
            },
            {
              year: "November 5, 2025",
              text: "First team meeting held",
            },
            {
              year: "November 7, 2025",
              text: "Initial confirmation of the LinguaBridge project",
            },
            {
              year: "November 19, 2025",
              text: "Completion of market research on students’ Japanese learning needs",
            },
            {
              year: "November 25, 2025",
              text: "Completion of market research on students’ Japanese learning needs",
            },
            {
              year: "December 5, 2025",
              text: " First group of volunteer instructors joined the project",
            },
            {
              year: "December 12, 2025",
              text: "First teaching syllabus finalized and rehearsal completed",
            },
              {
              year: "December 18, 2025",
              text: "First volunteer-led teaching session conducted",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-600">{item.year}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { icon: "🎧", text: "Real conversation practice" },
            { icon: "👩‍🏫", text: "Peer & Volunteer Learning" },
            { icon: "📚", text: "Accessible Learning Structure" },
             { icon: "📱", text: "Flexible online and offline learning" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="font-semibold text-gray-700 text-lg">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM PREVIEW ================= */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Yang Ruonan", role:"Leader",  image:rounan,},
            { name: "Antor Jahidul Hasan", role:"Technology", image:antor, },
            { name: "Shakil Md Yousuf Ali",role:"Marketing",image:yousuf, },
            { name: "Mitu Farhana Boby", role:"Ideas ", image:mitu, },
            { name: "Ranhoti Pedige Suraj Rangana Sugathapla",role:"Communication", image:suraj, },
            { name: "Sunar Bishal", role:"Review",image:bishal, },
            { name: "Shahi Bipana", role:"Support", image:bipana, },
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
               <img
          src={member.image}
          alt={member.name}
          className="w-30 h-35 mx-auto rounded-full object-cover mb-4"
        />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center bg-gradient-to-r from-blue-400 to-blue-950 text-white py-16 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-blue-100 max-w-xl mx-auto">
        Join LinguaBridge and learn Japanese through peer support, real conversation, and shared growth.
        </p>
       
      </section>
    </main>
  );
}
