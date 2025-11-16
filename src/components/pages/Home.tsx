export default function Home() {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Master <span className="text-yellow-300">Japanese</span> &{" "}
          <span className="text-yellow-300">English</span> With Confidence
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
          Learn with expert instructors, interactive lessons, and real speaking
          practice designed for every level.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/courses"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Start Learning
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Learn With Us?</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🎧", text: "Interactive speaking practice" },
            { icon: "👩‍🏫", text: "Native-level instructors" },
            { icon: "📚", text: "Structured lessons for all levels" },
            { icon: "📱", text: "Learn anytime, on any device" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <p className="font-semibold text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COURSES SECTION ================= */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Japanese Courses */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">🇯🇵 Japanese Courses</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Hiragana & Katakana for Beginners</li>
              <li>• JLPT Preparation (N5 - N1)</li>
              <li>• Conversational Japanese</li>
            </ul>
            <a
              href="/courses"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              View All →
            </a>
          </div>

          {/* English Courses */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">🇬🇧 English Courses</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• English Foundation & Grammar</li>
              <li>• Everyday Conversation</li>
              <li>• Business English & Email Writing</li>
            </ul>
            <a
              href="/courses"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              View All →
            </a>
          </div>
        </div>
      </section>

      {/* ================= TEACHERS SECTION ================= */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Teachers</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Yuki Nakamura", title: "Native Japanese Instructor" },
            { name: "Emily Johnson", title: "Certified English Trainer" },
            { name: "Satoshi Tanaka", title: "JLPT Exam Specialist" },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4" />
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-gray-600">{t.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 italic mb-4">
            “I passed JLPT N4 thanks to LinguaBridge! The teachers and lessons
            are amazing.”
          </p>
          <p className="font-semibold">— Arisa, Japan</p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Language Journey Today!
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto">
          Join thousands of students learning Japanese & English with confidence.
        </p>
        <a
          href="/courses"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
