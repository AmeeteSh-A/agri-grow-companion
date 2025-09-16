import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-accent/20">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = "/dashboard"}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Return to Dashboard
          </Button>
          <div>
            <Button 
              variant="outline"
              onClick={() => window.location.href = "/"}
              className="border-border/60 hover:border-primary/60"
            >
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
