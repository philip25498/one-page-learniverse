import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Menu, X, LogOut, GraduationCap } from "lucide-react";

interface DashboardSidebarProps {
  onNavigate: (sectionId: string) => void;
}

const DashboardSidebar = ({ onNavigate }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar-background text-sidebar-foreground rounded-lg shadow-lg"
      >
        {isCollapsed ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-sidebar-background text-sidebar-foreground transition-all duration-300 z-40 shadow-xl ${
          isCollapsed ? "-translate-x-full md:translate-x-0 md:w-20" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-sidebar-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
              </div>
              {!isCollapsed && (
                <span className="font-bold text-xl">EduLearn</span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              onClick={() => onNavigate("home")}
            >
              <Home className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Home</span>}
            </Button>
            
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              onClick={() => onNavigate("courses")}
            >
              <BookOpen className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Courses</span>}
            </Button>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 space-y-2 border-t border-sidebar-border">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>Logout</span>}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <Menu size={20} /> : <X size={20} />}
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
