import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="px-6 py-20 bg-gray-100 min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or need help? Our team is here to support your language learning journey.
        </p>
      </header>

      {/* ================= CONTACT SECTION ================= */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
        
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Get In Touch</h2>

          <div className="space-y-5 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> linguabridge@gmail.com.
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-blue-600" /> +81 90-1234-5678
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" /> Kyoto, Japan
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Follow Us:</h3>
            <div className="flex gap-4 text-2xl text-gray-600">
              <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
       <div className="bg-white p-8 rounded-xl shadow-md space-y-5" ><p>For course reservations, please send us an email following the format shown on the course details page.
If you would like to join us as a volunteer, please send your self-introduction and basic information to this email address.
If you have any questions, feel free to contact us. Thank you.
</p></div>

        {/* <form className="bg-white p-8 rounded-xl shadow-md space-y-5">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form> */}
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <iframe
          title="LinguaBridge Location"
          width="100%"
          height="350"
          loading="lazy"
          allowFullScreen
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.1381160820897!2d135.77673407456933!3d35.03068966543764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001085a40096db1%3A0x8c895182522ac6d1!2sThe%20Kyoto%20College%20of%20Graduate%20Studies%20for%20Informatics!5e1!3m2!1sen!2sjp!4v1763301781014!5m2!1sen!2sjp"
        ></iframe>
      </section>
    </main>
  );
}

