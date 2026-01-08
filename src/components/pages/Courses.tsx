import course1 from "../../assets/course1.jpg"
import course2 from "../../assets/course2.jpg"
import course3 from "../../assets/course3.jpg"
import ass1 from "../../assets/ass1.jpeg"
import ass2 from "../../assets/aas2.jpeg"

import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails"



import { useState } from "react";

interface Course {
  id: number;
  title: string;
  level: string;
   Smethod: string;
  Schedule:string;
  category: "japanese" | "english";
  image: string;
  
 
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Daily Conversation",
    level: "Daily Conversation",
    category: "japanese",
    Smethod:"Please send the course name, corresponding schedule, class format (online or offline), your name, and your LINE ID to the designated email address.The registration deadline is one week before the course begins.The application result and class location details will be sent by email by our staff.",
     Schedule:"2025.12.18  17:00~18:00   Self-Introduction / Face to face & Online / Completed / Participants: 8·2026.2.29   17:00~18:00  Online",
    image: course1,
  },
  {
    id: 2,
    title: "Grammar",
    level: "Grammar",
    category: "japanese",
    Smethod:"",
     Schedule:"",
    image: course2,
  },
  {
    id: 3,
    title: "Reading",
    level: "Reading",
    category: "japanese",
    Smethod:"",
     Schedule:"",
    image: course3,
  },
  {
    id: 4,
    title: "English Grammar Essentials",
    level: "Association 1",
    category: "english",
    Smethod:"",
     Schedule:"",
    image: ass1,
  
  },
  {
    id: 5,
    title: "Everyday English Conversation",
    level: "Association 2",
    category: "english",
    Smethod:"",
     Schedule:"",
    image: ass2,
  },
  // {
  //   id: 6,
  //   title: "Business English & Email Writing",
  //   level: "Association 3",
  //   category: "english",
  //   Smethod:"",
  //    Schedule:"",
  //   image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  // },
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
        <h1 className="text-4xl font-bold mb-4">Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a course and start your journey toward fluency in Japanese.
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
          Course Schedule
        </button>
        <button
          onClick={() => setFilter("english")}
          className={`px-5 py-2 rounded-lg font-semibold ${
            filter === "english"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Lecture Slides
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
              {/* <h3 className="text-xl font-bold mb-2">{course.title}</h3> */}
              <p className="text-sm text-gray-500 mb-4">{course.level}</p>

             <Link
  to="/course-details"
  state={{
    title: course.title,
    image: course.image,
    level: course.level,
    Schedule:course.Schedule,
    Method:course.Smethod,
  }}
  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
>
  View Details
</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
