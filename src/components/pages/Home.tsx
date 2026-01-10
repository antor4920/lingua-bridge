
import sensei1 from "../../assets/image.png"
import sensei2 from "../../assets/sensei2.jpg"
import sensei3 from "../../assets/sensei3.jpg"
import video from "../../assets/CLASS.mp4"
export default function Home() {
  return (
    
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-950 text-white px-6">
  <div className="text-center max-w-4xl">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
      Learning <span className="text-yellow-300">Japanese</span>{" "}
      <span className="text-yellow-300">Together</span> With Confidence
    </h1>

    <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed">
      Learn Japanese through volunteer-led lessons, peer support, and real
      conversation practice designed for learners at different levels.
    </p>
  </div>

  {/* Scroll Hint */}
  <div className="absolute bottom-8 text-blue-200 animate-bounce">
    ↓ Scroll
  </div>
</section>

      {/* ================= VIDEO SECTION ================= */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">
      See How LinguaBridge Works
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Watch how our platform connects learners and teachers through
      real conversation and cultural exchange.
    </p>

    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={video}
        title="LinguaBridge Introduction Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>


      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Learn With Us?</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🎧", text: "Real Conversation Practice" },
            { icon: "👩‍🏫", text: "Peer and Volunteer Learning" },
            { icon: "📚", text: "Accessible Learning Structure" },
            { icon: "📱", text: "Flexible online and offline learning" },
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
            <h3 className="text-2xl font-bold mb-4">🇯🇵 Online Japanese Courses</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Hiragana & Katakana for Beginners</li>
              <li>• Vocabulary</li>
              <li>• Conversational Japanese</li>
              <li>• Flexible Learning & Self-Study</li>
            </ul>
            {/* <a
              href="/courses"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              View All →
            </a> */}
          </div>

          {/* English Courses */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">🇬🇧 Realtime offline Courses</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Speaking & Listening</li>
              <li>•  Reading & Writing</li>
              <li>• Grammar & Vocabulary</li>
              <li>• Japanese Culture & Life Skills</li>
            </ul>
            {/* <a
              href="/courses"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              View All →
            </a> */}
          </div>
        </div>
      </section>

      {/* ================= TEACHERS SECTION ================= */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Teachers</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Mr. Shao", title: "He specializes in daily Japanese conversation and reading.", image:sensei1 },
            { name: "Mr. Wang", title: "He can teach Japanese conversation and reading.",image:sensei2  },
            { name: "Mr. Chen", title: "He is able to teach Japanese conversation, grammar, and reading.",image:sensei3  },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
             <img
          src={t.image}
          alt={t.name}
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
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
            “The instructor taught in a clear and effective way, and the class atmosphere was friendly and engaging. Everyone participated actively, and I felt I learned a lot. I hope to join the next class.”
          </p>
          <p className="font-semibold">—Chris Evedon Liao, China</p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-400 to-blue-950 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Language Journey Today!
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto">
        Join our volunteer-led Japanese classes and learn through real interaction.
        </p>
        {/* <a
          href="/courses"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Get Started
        </a> */}
      </section>
    </main>
  );
}
