import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import Teachers from "./components/pages/Teachers";
import TeacherDetails from "./components/pages/TeacherDetails";
import CourseDetails from "./components/pages/CourseDetails";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
