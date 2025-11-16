import { useState } from "react";

interface Course {
  id: number;
  title: string;
  level: string;
  category: "japanese" | "english";
  image: string;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Hiragana & Katakana Mastery",
    level: "Beginner",
    category: "japanese",
    image: "https://images.pexels.com/photos/3635870/pexels-photo-3635870.jpeg",
  },
  {
    id: 2,
    title: "JLPT N5 Complete Preparation",
    level: "Beginner",
    category: "japanese",
    image: "https://images.pexels.com/photos/590571/pexels-photo-590571.jpeg",
  },
  {
    id: 3,
    title: "JLPT N3 Grammar & Reading",
    level: "Intermediate",
    category: "japanese",
    image: "https://images.pexels.com/photos/590590/pexels-photo-590590.jpeg",
  },
  {
    id: 4,
    title: "English Grammar Essentials",
    level: "Beginner",
    category: "english",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
  },
  {
    id: 5,
    title: "Everyday English Conversation",
    level: "Intermediate",
    category: "english",
    image: "https://images.pexels.com/photos/4240506/pexels-photo-4240506.jpeg",
  },
  {
    id: 6,
    title: "Business English & Email Writing",
    level: "Advanced",
    category: "english",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
];

export default function Courses() {
  const [filter, setFilter] = useState<"all" | "japanese" | "english">("all");

  const filteredCourses =
    filter === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === filter);

  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a course and start your journey toward fluency in Japanese or English.
        </p>
      </header>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2 rounded-lg font-semibold ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("japanese")}
          className={`px-5 py-2 rounded-lg font-semibold ${
            filter === "japanese"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Japanese 🇯🇵
        </button>
        <button
          onClick={() => setFilter("english")}
          className={`px-5 py-2 rounded-lg font-semibold ${
            filter === "english"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-200"
          }`}
        >
          English 🇬🇧
        </button>
      </div>

      {/* ================= COURSE GRID ================= */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{course.level} Level</p>

              <a
                href={`/courses/${course.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
