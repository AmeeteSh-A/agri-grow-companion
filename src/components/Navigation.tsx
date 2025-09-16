import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import agrisenseLogo from '@/assets/agrisense-logo.png';
import { 
  Home,
  BarChart3,
  History,
  Users,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/detailed-analysis', label: 'Analysis', icon: BarChart3 },
    { path: '/history', label: 'History', icon: History },
    { path: '/about', label: 'About', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={agrisenseLogo} alt="AgriSense" className="w-8 h-8" />
              <div>
                <h1 className="text-lg font-bold text-foreground">AgriSense</h1>
                <p className="text-xs text-muted-foreground">Smart Agriculture</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant={isActive(item.path) ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => navigate(item.path)}
                    className={`flex items-center space-x-2 ${
                      isActive(item.path) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Status Badge */}
            <Badge variant="outline" className="border-success/50 text-success">
              System Online
            </Badge>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 shadow-soft">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={agrisenseLogo} alt="AgriSense" className="w-8 h-8" />
              <div>
                <h1 className="text-lg font-bold text-foreground">AgriSense</h1>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t border-border/40 bg-white/98 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.path}
                      variant={isActive(item.path) ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full justify-start flex items-center space-x-2 ${
                        isActive(item.path) 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Button>
                  );
                })}
                <div className="pt-2">
                  <Badge variant="outline" className="border-success/50 text-success">
                    System Online
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;