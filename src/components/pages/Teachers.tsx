import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  image: string;
  description: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teachersData: Teacher[] = [
  {
    id: 1,
    name: "Yuki Nakamura",
    subject: "Native Japanese Instructor",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    description:
      "Specialist in conversational Japanese and JLPT preparation with 5+ years of teaching experience.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Emily Johnson",
    subject: "Certified English Tutor",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    description:
      "Experienced ESL instructor helping students improve speaking, grammar, and business English.",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Satoshi Tanaka",
    subject: "JLPT Exam Specialist",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    description:
      "JLPT-focused teaching with advanced grammar, vocabulary building, and mock testing strategies.",
    socials: {
      instagram: "https://instagram.com",
    },
  },
];

export default function Teachers() {
  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Teachers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn from certified language experts, native speakers, and experienced instructors.
        </p>
      </header>

      {/* ================= TEACHER GRID ================= */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
              <p className="text-blue-600 font-medium mt-1">{teacher.subject}</p>
              <p className="text-gray-600 text-sm mt-3">{teacher.description}</p>

              {/* Social Links */}
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
              </div>

              <button className="mt-5 w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Book a Lesson
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
