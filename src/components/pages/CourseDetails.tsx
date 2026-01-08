
import pdf from "../../assets/Week 6-Writing Emails_Spring 2025.pdf"
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-20">No course selected</p>;
  }

  const { title, image, level } = state as {
    title: string;
    image: string;
    level: string;
  };

  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-6">Level: {level}</p>

          <button
            onClick={() => window.open(pdf)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
}
