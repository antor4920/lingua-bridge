import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { teachersData } from "./TeachersData";
import { FaArrowLeft } from "react-icons/fa";

export default function TeacherDetails() {
  const { id } = useParams();
  const teacherId = Number(id);

  const teacher = teachersData.find((t) => t.id === teacherId);

  // ⭐ Scroll to TOP whenever this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!teacher) {
    return <h1 className="text-center text-red-600 mt-10">Teacher Not Found</h1>;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 min-h-screen bg-gray-100">

      {/* Back Button */}
      <Link to="/teachers" className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-800">
        <FaArrowLeft /> Back to Teachers
      </Link>

      {/* MAIN CARD */}
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10">

        {/* LEFT — Teacher Image */}
        <div className="md:w-1/2">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-96 object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* RIGHT — Teacher Info */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">{teacher.name}</h1>
          <p className="text-xl text-blue-600 mt-1">{teacher.subject}</p>

          <p className="mt-4 text-gray-700 leading-relaxed">{teacher.description}</p>

          {/* Teaching Abilities */}
          {teacher.abilities && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Teaching Abilities</h2>
              <ul className="list-disc ml-6 text-gray-700">
                {teacher.abilities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Lessons */}
          {teacher.lessons && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">Lessons Offered</h2>
              <ul className="list-disc ml-6 text-gray-700">
                {teacher.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Email */}
          <p className="mt-6 text-lg">
            <strong>Email:</strong>{" "}
            <span className="text-blue-700">{teacher.email}</span>
          </p>

          {/* Confirm Button */}
          {/* <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Confirm Booking
          </button> */}
        </div>
      </div>
    </main>
  );
}
