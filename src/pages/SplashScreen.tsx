import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agrisenseLogo from '@/assets/agrisense-logo.png';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`fixed inset-0 bg-agriculture-gradient flex flex-col items-center justify-center text-white transition-opacity duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center space-y-8 fade-in">
        <div className="w-32 h-32 mx-auto mb-8">
          <img 
            src={agrisenseLogo} 
            alt="AgriSense Logo" 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            AgriSense
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Smart Agriculture Monitoring
          </p>
        </div>
        
        <div className="mt-16 space-y-2">
          <p className="text-lg font-semibold text-white/95">
            Team Virentus
          </p>
          <p className="text-sm text-white/80">
            Innovation in Agriculture Technology
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;