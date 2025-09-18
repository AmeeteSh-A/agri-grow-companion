import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/data/mockData';
import agrisenseLogo from '@/assets/agrisense-logo.png';
import { 
  ArrowLeft,
  Users,
  Mail,
  Github,
  Linkedin,
  Award,
  Target,
  Lightbulb,
  Heart,
  ExternalLink
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      {/* Header with enhanced gradient */}
      <div className="bg-gradient-to-r from-white via-white to-primary/5 border-b border-border/40 shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-smooth"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="animate-fade-in">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Team Virentus
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">Innovation in Agriculture Technology</p>
              </div>
            </div>
            <div className="w-16 h-16 hover-scale">
              <img 
                src={agrisenseLogo} 
                alt="AgriSense Logo" 
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Mission Section with enhanced animations */}
        <div className="text-center space-y-10 animate-fade-in">
          <div className="w-28 h-28 mx-auto hover-scale bg-gradient-to-br from-primary/10 to-primary/20 rounded-full p-6 shadow-glow">
            <img 
              src={agrisenseLogo} 
              alt="AgriSense Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              Revolutionizing Agriculture with Smart Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a passionate team of innovators dedicated to solving critical challenges in agriculture 
              through cutting-edge IoT solutions, machine learning, and data analytics. Our mission is to 
              empower farmers with intelligent tools that optimize crop yield, reduce resource waste, and 
              promote sustainable farming practices.
            </p>
          </div>
        </div>

        {/* Enhanced Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-border/30 hover:border-primary/40 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-gradient-to-br from-background to-accent/5">
            <CardContent className="p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-6 flex items-center justify-center hover-scale shadow-moderate">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between traditional farming and modern technology, 
                making precision agriculture accessible to farmers worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/30 hover:border-warning/40 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-gradient-to-br from-background to-warning/5">
            <CardContent className="p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-full mx-auto mb-6 flex items-center justify-center hover-scale shadow-moderate">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We leverage the latest in IoT, AI, and data science to create solutions 
                that are both powerful and user-friendly for the farming community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/30 hover:border-success/40 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 bg-gradient-to-br from-background to-success/5">
            <CardContent className="p-10">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-full mx-auto mb-6 flex items-center justify-center hover-scale shadow-moderate">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every line of code we write and every sensor we deploy aims to improve 
                food security and support sustainable agricultural practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Team Section */}
        <div className="space-y-12">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A diverse group of engineers, designers, and agricultural enthusiasts working together 
              to create the future of smart farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="border-border/30 hover:border-primary/40 hover:shadow-elegant transition-smooth group hover:-translate-y-2 bg-gradient-to-br from-background to-accent/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary-dark to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-smooth shadow-moderate group-hover:shadow-glow">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-smooth">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="w-9 h-9 p-0 hover:bg-primary/10 hover:text-primary transition-smooth rounded-full"
                        onClick={() => window.open(`https://${member.github}`, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="w-9 h-9 p-0 hover:bg-primary/10 hover:text-primary transition-smooth rounded-full"
                        onClick={() => window.open(`https://${member.linkedin}`, '_blank')}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <Card className="border-border/30 bg-gradient-to-br from-accent/10 via-background to-primary/5 shadow-elegant">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-3xl">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span>Get in Touch</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're always excited to collaborate, discuss agricultural challenges, or share insights 
              about our technology. Reach out to us anytime!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 text-foreground hover:text-primary transition-smooth group">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="mailto:teamvirentus@sih.in" 
                  className="text-xl font-semibold hover:text-primary transition-smooth story-link"
                >
                  teamvirentus@sih.in
                </a>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  className="border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-smooth group"
                  onClick={() => window.open('https://github.com/teamvirentus', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-smooth" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-smooth group"
                  onClick={() => window.open('https://linkedin.com/company/teamvirentus', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-smooth" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Recognition Section */}
        <Card className="border-border/30 bg-gradient-to-br from-background to-warning/5 shadow-elegant">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-3xl">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span>Recognition & Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-3 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:scale-110 transition-smooth">
                  5+
                </div>
                <p className="text-muted-foreground text-lg">Farms Monitored</p>
              </div>
              <div className="space-y-3 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-success to-success/80 bg-clip-text text-transparent group-hover:scale-110 transition-smooth">
                  25%
                </div>
                <p className="text-muted-foreground text-lg">Water Savings</p>
              </div>
              <div className="space-y-3 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-warning to-warning/80 bg-clip-text text-transparent group-hover:scale-110 transition-smooth">
                  95%
                </div>
                <p className="text-muted-foreground text-lg">Prediction Accuracy</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Our AgriSense platform has been recognized at various hackathons and agricultural 
              technology competitions for its innovative approach to precision farming.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;