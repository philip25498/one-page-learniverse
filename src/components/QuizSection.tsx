import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Course } from "@/types/course";
import { Trophy, Star, Sparkles } from "lucide-react";

interface QuizSectionProps {
  course: Course;
  onClose: () => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const generateQuestions = (courseTitle: string): Question[] => {
  return [
    {
      id: 1,
      question: `What is the main focus of ${courseTitle}?`,
      options: ["Learning basics", "Advanced techniques", "Practical application", "All of the above"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Which skill will you gain from this course?",
      options: ["Problem solving", "Critical thinking", "Technical expertise", "All of the above"],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "How long does it take to complete the course?",
      options: ["Varies by student", "Fixed timeline", "Self-paced", "Depends on modules"],
      correctAnswer: 0
    }
  ];
};

const QuizSection = ({ course, onClose }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = generateQuestions(course.title);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-blue-500 to-cyan-500";
    if (percentage >= 40) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const ribbonColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {showResults ? "Quiz Complete! 🎉" : `${course.title} - Quiz`}
          </DialogTitle>
        </DialogHeader>

        {!showResults ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-semibold text-primary">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {questions[currentQuestion].question}
              </h3>

              <RadioGroup
                value={selectedAnswers[currentQuestion]?.toString()}
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === undefined}
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center py-8">
            <div className="relative">
              {/* Animated ribbons */}
              <div className="absolute inset-0 flex justify-center items-start overflow-hidden">
                {ribbonColors.map((color, index) => (
                  <div
                    key={index}
                    className="absolute animate-pulse"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: '-10px',
                      width: '4px',
                      height: '100px',
                      backgroundColor: color,
                      transform: `rotate(${-20 + index * 10}deg)`,
                      animation: `pulse 1s ease-in-out ${index * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>

              <div className={`mx-auto w-32 h-32 rounded-full bg-gradient-to-br ${getScoreColor()} flex items-center justify-center relative z-10`}>
                <Trophy className="h-16 w-16 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center gap-2">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Congratulations!
                </h2>
                <Sparkles className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="text-xl text-muted-foreground">
                You scored {score} out of {questions.length}
              </p>
              <p className="text-lg font-semibold text-primary">
                {Math.round((score / questions.length) * 100)}% Correct
              </p>
            </div>

            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-8 w-8 ${
                    index < Math.round((score / questions.length) * 5)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-muted-foreground italic">
              "Keep up the great work on your learning journey!"
            </p>

            <Button onClick={onClose} className="w-full">
              Back to Courses
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizSection;
