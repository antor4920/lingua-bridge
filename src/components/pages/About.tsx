export default function About() {
  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About LinguaBridge</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We help students around the world master Japanese and English
          through expert instruction, real conversation practice, and a fun,
          modern learning experience.
        </p>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To make language learning accessible, enjoyable, and effective for
            everyone—whether you're learning for travel, career, or personal growth.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            A world connected through communication, where language barriers no
            longer limit opportunities or cultural understanding.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>

        <div className="space-y-8 border-l-4 border-blue-600 pl-6">
          {[
            {
              year: "2021",
              text: "LinguaBridge started with a small group of passionate language teachers.",
            },
            {
              year: "2022",
              text: "Launched our first online Japanese and English learning programs.",
            },
            {
              year: "2023",
              text: "Reached 10,000+ students worldwide with interactive speaking lessons.",
            },
            {
              year: "2024",
              text: "Expanded teacher community and introduced AI-powered learning tools.",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🎧", text: "Real conversation practice" },
            { icon: "👩‍🏫", text: "Certified expert instructors" },
            { icon: "📚", text: "Structured step-by-step lessons" },
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

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Yuki Nakamura", role: "Co-Founder / Japanese Instructor" },
            { name: "Emily Johnson", role: "Co-Founder / English Instructor" },
            { name: "Satoshi Tanaka", role: "Academic Director" },
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center bg-blue-600 text-white py-16 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          Join thousands of students mastering Japanese and English with LinguaBridge.
        </p>
        <a
          href="/courses"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Explore Courses
        </a>
      </section>
    </main>
  );
}
