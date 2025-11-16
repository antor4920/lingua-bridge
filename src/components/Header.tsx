import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">LinguaBridge</Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/courses" className="hover:text-blue-600">Courses</Link>
            <Link to="/teachers" className="hover:text-blue-600">Teachers</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <HiMenu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setOpen(false)}></div>
      )}

      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20 p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link to="/teachers" onClick={() => setOpen(false)}>Teachers</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </aside>
    </>
  );
}
