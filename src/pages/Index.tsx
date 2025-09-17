import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, TestTube, Pill, Heart, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      type: "patient",
      title: "Patient",
      description: "Access your health records, book appointments, and manage your healthcare journey",
      icon: User,
      color: "bg-primary hover:bg-primary-hover",
      route: "/patient"
    },
    {
      type: "doctor",
      title: "Doctor", 
      description: "Manage patient records, appointments, and provide quality healthcare services",
      icon: Stethoscope,
      color: "bg-medical-green hover:bg-medical-green/90",
      route: "/doctor"
    },
    {
      type: "lab",
      title: "Lab Assistant",
      description: "Upload test results, manage lab reports, and coordinate with healthcare providers",
      icon: TestTube,
      color: "bg-medical-orange hover:bg-medical-orange/90", 
      route: "/lab"
    },
    {
      type: "medical",
      title: "Medical Staff",
      description: "Coordinate patient care, manage medical supplies, and support healthcare operations",
      icon: Pill,
      color: "bg-secondary-foreground hover:bg-secondary-foreground/90",
      route: "/medical"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg healthcare-gradient flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Kerala Digital Health</h1>
                <p className="text-sm text-muted-foreground">Secure Healthcare for All</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Secure & Private</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 healthcare-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Digital Health Records for 
                  <span className="text-primary"> Migrant Workers</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Secure, portable, and accessible health records that follow you across Kerala's healthcare institutions. 
                  Supporting multiple languages and designed for everyone.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-primary-light px-4 py-2 rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Multilingual Support</span>
                </div>
                <div className="flex items-center space-x-2 bg-medical-green-light px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-medical-green" />
                  <span className="text-sm font-medium text-medical-green">Secure & Private</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Digital healthcare for migrant workers in Kerala"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl font-bold text-foreground">Choose Your Role</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your role to access the appropriate features and services designed for your healthcare needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((userType) => (
              <Card 
                key={userType.type}
                className="user-type-card group"
                onClick={() => navigate(userType.route)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto ${userType.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 healthcare-transition`}>
                    <userType.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{userType.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {userType.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-3xl font-bold text-foreground">Key Features</h3>
            <p className="text-lg text-muted-foreground">
              Built for accessibility, security, and seamless healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="healthcare-card text-center">
              <div className="w-12 h-12 mx-auto healthcare-gradient rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-lg mb-2">Secure & Private</h4>
              <p className="text-muted-foreground">End-to-end encryption and privacy controls ensure your health data stays secure</p>
            </div>
            
            <div className="healthcare-card text-center">
              <div className="w-12 h-12 mx-auto healthcare-gradient rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-lg mb-2">Multilingual Support</h4>
              <p className="text-muted-foreground">Available in Malayalam, Hindi, Tamil, Bengali and more languages</p>
            </div>
            
            <div className="healthcare-card text-center">
              <div className="w-12 h-12 mx-auto healthcare-gradient rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-lg mb-2">Portable Records</h4>
              <p className="text-muted-foreground">Access your health records anywhere across Kerala's healthcare network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Kerala Digital Health Records</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting Sustainable Development Goals through accessible healthcare technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;