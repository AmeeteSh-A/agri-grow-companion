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
  Heart
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <div className="bg-white border-b border-border/40 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="border-border/60 hover:border-primary/60"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Team Virentus</h1>
                <p className="text-muted-foreground mt-1">Innovation in Agriculture Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Mission Section */}
        <div className="text-center space-y-8">
          <div className="w-24 h-24 mx-auto">
            <img 
              src={agrisenseLogo} 
              alt="AgriSense Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Revolutionizing Agriculture with Smart Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a passionate team of innovators dedicated to solving critical challenges in agriculture 
              through cutting-edge IoT solutions, machine learning, and data analytics. Our mission is to 
              empower farmers with intelligent tools that optimize crop yield, reduce resource waste, and 
              promote sustainable farming practices.
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-border/50 text-center hover:shadow-moderate transition-smooth">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To bridge the gap between traditional farming and modern technology, 
                making precision agriculture accessible to farmers worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 text-center hover:shadow-moderate transition-smooth">
            <CardContent className="p-8">
              <Lightbulb className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We leverage the latest in IoT, AI, and data science to create solutions 
                that are both powerful and user-friendly for the farming community.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 text-center hover:shadow-moderate transition-smooth">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Every line of code we write and every sensor we deploy aims to improve 
                food security and support sustainable agricultural practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of engineers, designers, and agricultural enthusiasts working together 
              to create the future of smart farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 hover:shadow-moderate transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-agriculture-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {member.role}
                  </Badge>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="border-border/50 bg-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Mail className="w-6 h-6 text-primary" />
              <span>Get in Touch</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always excited to collaborate, discuss agricultural challenges, or share insights 
              about our technology. Reach out to us anytime!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:teamvirentus@sih.in" 
                  className="text-lg font-semibold hover:text-primary transition-smooth"
                >
                  teamvirentus@sih.in
                </a>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-border/60 hover:border-primary/60">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-border/60 hover:border-primary/60">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Awards/Recognition Section */}
        <Card className="border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Award className="w-6 h-6 text-warning" />
              <span>Recognition & Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-muted-foreground">Farms Monitored</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">25%</div>
                <p className="text-muted-foreground">Water Savings</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">95%</div>
                <p className="text-muted-foreground">Prediction Accuracy</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
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