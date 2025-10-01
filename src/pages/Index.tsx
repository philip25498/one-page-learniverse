import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-primary">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Welcome to EduLearn
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transform your future with our comprehensive online learning platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Login
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/signup")}
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose EduLearn?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Diverse Courses</h3>
              <p className="text-muted-foreground">
                Access a wide range of courses across multiple disciplines
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Certified Learning</h3>
              <p className="text-muted-foreground">
                Earn certificates upon completion of courses
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals and experienced educators
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
