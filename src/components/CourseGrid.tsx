import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import { BookOpen, Clock, Users, DollarSign } from "lucide-react";

interface CourseGridProps {
  onCourseClick: (course: Course) => void;
  onQuizClick: (course: Course) => void;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master HTML, CSS, and JavaScript from scratch",
    cost: "$299",
    onlineClasses: 24,
    physicalClasses: 6,
    duration: "8 weeks",
    color: "from-blue-500 to-cyan-500",
    icon: "💻",
    notes: ["HTML5 & CSS3 Basics", "JavaScript ES6+", "Responsive Design", "Git & GitHub"],
    outlineLink: "https://example.com/web-dev-outline"
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Learn data analysis and machine learning with Python",
    cost: "$399",
    onlineClasses: 30,
    physicalClasses: 8,
    duration: "10 weeks",
    color: "from-purple-500 to-pink-500",
    icon: "📊",
    notes: ["Python Fundamentals", "NumPy & Pandas", "Data Visualization", "Machine Learning Basics"],
    outlineLink: "https://example.com/data-science-outline"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Complete guide to modern digital marketing strategies",
    cost: "$249",
    onlineClasses: 20,
    physicalClasses: 5,
    duration: "6 weeks",
    color: "from-orange-500 to-red-500",
    icon: "📱",
    notes: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Metrics"],
    outlineLink: "https://example.com/marketing-outline"
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    description: "Create beautiful and functional user interfaces",
    cost: "$349",
    onlineClasses: 26,
    physicalClasses: 7,
    duration: "9 weeks",
    color: "from-green-500 to-teal-500",
    icon: "🎨",
    notes: ["Design Thinking", "Figma Mastery", "User Research", "Prototyping"],
    outlineLink: "https://example.com/uiux-outline"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications",
    cost: "$449",
    onlineClasses: 32,
    physicalClasses: 10,
    duration: "12 weeks",
    color: "from-indigo-500 to-purple-500",
    icon: "📲",
    notes: ["React Native Basics", "API Integration", "State Management", "App Deployment"],
    outlineLink: "https://example.com/mobile-outline"
  },
  {
    id: 6,
    title: "Business Analytics",
    description: "Make data-driven business decisions",
    cost: "$329",
    onlineClasses: 22,
    physicalClasses: 6,
    duration: "7 weeks",
    color: "from-yellow-500 to-orange-500",
    icon: "📈",
    notes: ["Excel Advanced", "SQL Queries", "Business Intelligence", "Dashboard Creation"],
    outlineLink: "https://example.com/analytics-outline"
  }
];

const CourseGrid = ({ onCourseClick, onQuizClick }: CourseGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
        >
          <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl`}>
            {course.icon}
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            
            <p className="text-muted-foreground text-sm">
              {course.description}
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign size={16} />
                <span>{course.cost}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen size={16} />
                <span>{course.onlineClasses} online</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users size={16} />
                <span>{course.physicalClasses} physical</span>
              </div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                className="flex-1"
                onClick={() => onCourseClick(course)}
              >
                View Details
              </Button>
              <Button 
                variant="outline"
                onClick={() => onQuizClick(course)}
              >
                Take Quiz
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CourseGrid;
