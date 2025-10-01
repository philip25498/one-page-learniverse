import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import { DollarSign, Clock, BookOpen, Users, ExternalLink, FileText } from "lucide-react";

interface CourseDetailProps {
  course: Course;
  onClose: () => void;
}

const CourseDetail = ({ course, onClose }: CourseDetailProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className={`h-24 -mx-6 -mt-6 mb-4 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl`}>
            {course.icon}
          </div>
          <DialogTitle className="text-2xl">{course.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground">{course.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cost</p>
                <p className="font-semibold">{course.cost}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Online Classes</p>
                <p className="font-semibold">{course.onlineClasses}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Physical Classes</p>
                <p className="font-semibold">{course.physicalClasses}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Course Notes</h3>
            </div>
            <ul className="space-y-2">
              {course.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button 
              className="flex-1" 
              onClick={() => window.open(course.outlineLink, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Course Outline
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetail;
