

import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const { state } = useLocation();

  if (!state) {
    return <p className="text-center mt-20">No course selected</p>;
  }

  const { title, image,  Schedule,
    Method, pdf} = state as {
    title: string;
    image: string;
    level: string;
    Schedule: string;
    Method: string;
    pdf?: string;
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
          {/* <p className="text-gray-600 mb-6">Level: {level}</p> */}
          <p className="text-gray-600 mb-6"> {Schedule}</p>
          <p className="text-gray-600 mb-6">  {Method}</p>
           {pdf && (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">Course Material</h2>

    <iframe
      src={pdf}
      style={{ width: "100%", height: "600px" }}
      title="Course PDF"
    />

    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-blue-600 underline"
    >
      Open PDF in new tab
    </a>
  </div>
)}


         
        </div>
      </div>
    </main>
  );
}
