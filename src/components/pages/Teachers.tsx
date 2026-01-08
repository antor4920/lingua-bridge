import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { teachersData } from "./TeachersData";





export default function Teachers() {
  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Teachers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn together with our excellent volunteer Instructors. You are also welcome to join us as a volunteer.
        </p>
      </header>

      {/* ================= TEACHER GRID ================= */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-2xl mx-auto">
        {teachersData.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{teacher.name}</h3>
              {/* <p className="text-blue-600 font-medium mt-1">{teacher.subject}</p> */}
              <p className="text-gray-600 text-sm mt-3">{teacher.description}</p>

              {/* Social Links
              <div className="flex justify-center gap-4 mt-4 text-xl text-gray-500">
                {teacher.socials?.facebook && (
                  <a href={teacher.socials.facebook} className="hover:text-blue-600">
                    <FaFacebook />
                  </a>
                )}
                {teacher.socials?.instagram && (
                  <a href={teacher.socials.instagram} className="hover:text-pink-500">
                    <FaInstagram />
                  </a>
                )}
                {teacher.socials?.linkedin && (
                  <a href={teacher.socials.linkedin} className="hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                )}
              </div> */}

             <Link
  to={`/teachers/${teacher.id}`}
  className="mt-5 w-full block px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center"
>
  Book A Lesson Through Email
</Link>

            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
