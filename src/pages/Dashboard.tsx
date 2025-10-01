import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import CourseGrid from "@/components/CourseGrid";
import CourseDetail from "@/components/CourseDetail";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import { Course } from "@/types/course";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedQuizCourse, setSelectedQuizCourse] = useState<Course | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex">
      <DashboardSidebar onNavigate={scrollToSection} />
      
      <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
        <main className="p-6 space-y-12">
          <section id="home" className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center space-y-6 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome to EduLearn
              </h1>
              <p className="text-xl text-muted-foreground">
                Unlock your potential with our comprehensive online learning platform. 
                Choose from a variety of courses designed to help you succeed.
              </p>
              <button
                onClick={() => scrollToSection("courses")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Explore Courses
              </button>
            </div>
          </section>

          <section id="courses" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold">Our Courses</h2>
              <p className="text-muted-foreground">Select a course to view details and start learning</p>
            </div>
            <CourseGrid 
              onCourseClick={setSelectedCourse}
              onQuizClick={(course) => {
                setSelectedQuizCourse(course);
                setShowQuiz(true);
              }}
            />
          </section>

          <section id="quizzes" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold">Test Your Knowledge</h2>
              <p className="text-muted-foreground">Take quizzes to assess your learning progress</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {selectedCourse && (
        <CourseDetail
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {showQuiz && selectedQuizCourse && (
        <QuizSection
          course={selectedQuizCourse}
          onClose={() => {
            setShowQuiz(false);
            setSelectedQuizCourse(null);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
