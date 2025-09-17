import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Stethoscope, Mail, Phone, CreditCard, Lock, Heart, Building, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: 'login' | 'register') => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${type === 'login' ? 'Login' : 'Registration'} Successful`,
        description: `Welcome to Kerala Digital Health Records - Doctor Portal`,
      });
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Doctor Portal</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-medical-green hover:bg-medical-green/90 rounded-xl flex items-center justify-center mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Doctor Access</h1>
            <p className="text-muted-foreground">Manage patient records and provide quality care</p>
          </div>

          <Card className="healthcare-card">
            <Tabs defaultValue="login" className="w-full">
              <CardHeader className="text-center pb-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent>
                <TabsContent value="login" className="space-y-4 mt-0">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email or Phone</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="login-email"
                          type="text"
                          placeholder="Enter email or phone number"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="login-password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-medical-green hover:bg-medical-green/90"
                      onClick={() => handleAuth('login')}
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="register" className="space-y-4 mt-0">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Full Name</Label>
                      <div className="relative">
                        <Stethoscope className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-name"
                          type="text"
                          placeholder="Dr. Enter your full name"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-aadhaar">Aadhaar Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-aadhaar"
                          type="text"
                          placeholder="Enter your Aadhaar number"
                          className="pl-10"
                          maxLength={12}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-email"
                          type="email"
                          placeholder="Enter your email address"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-license">Medical License Number</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-license"
                          type="text"
                          placeholder="Enter your medical license number"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-clinic">Clinic/Hospital Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-clinic"
                          type="text"
                          placeholder="Enter your clinic or hospital name"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="register-password"
                          type="password"
                          placeholder="Create a secure password"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-medical-green hover:bg-medical-green/90"
                      onClick={() => handleAuth('register')}
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Medical credentials will be verified before account activation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAuth;