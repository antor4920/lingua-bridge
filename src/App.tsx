import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import Teachers from "./components/pages/Teachers";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import TeacherDetails from "./components/pages/TeacherDetails";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
  

      </Routes>
      <Footer />
    </>
  );
}

export default App;
