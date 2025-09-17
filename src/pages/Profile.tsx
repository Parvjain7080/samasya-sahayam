import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Heart, 
  User, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  Shield,
  Edit,
  Camera,
  Save,
  Settings,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Raj Kumar",
    email: "raj.kumar@email.com",
    phone: "+91 9876543210",
    aadhaar: "1234 5678 9012",
    dateOfBirth: "1985-06-15",
    address: "123 Main Street, Kochi, Kerala 682001",
    emergencyContact: "+91 9876543211",
    bloodGroup: "B+",
    allergies: "None",
    healthId: "KL-DH-2024-001234",
    role: "Patient",
    registrationDate: "2024-01-15"
  });

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1000);
  };

  const profileActions = [
    {
      title: "Create Health ID",
      description: "Generate your digital health identity card",
      icon: CreditCard,
      action: () => navigate('/health-id'),
      color: "bg-medical-green"
    },
    {
      title: "Medical Records",
      description: "Access your complete health history",
      icon: FileText,
      action: () => console.log('View records'),
      color: "bg-primary"
    },
    {
      title: "Privacy Settings",
      description: "Manage your data privacy preferences",
      icon: Shield,
      action: () => console.log('Privacy settings'),
      color: "bg-medical-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">My Profile</span>
              </div>
            </div>
            
            <Button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              disabled={isLoading}
              className="flex items-center space-x-2"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  <span>{isLoading ? "Saving..." : "Save Changes"}</span>
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="healthcare-card mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={undefined} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">{userData.name}</h1>
                      <p className="text-muted-foreground text-lg">Health ID: {userData.healthId}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto md:mx-0 mt-2 md:mt-0">
                      <User className="w-3 h-3 mr-1" />
                      {userData.role}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{userData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Joined {new Date(userData.registrationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>Kerala, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content */}
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="health">Health Info</TabsTrigger>
              <TabsTrigger value="actions">Quick Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Manage your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={userData.name}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="aadhaar">Aadhaar Number</Label>
                      <Input
                        id="aadhaar"
                        value={userData.aadhaar}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, aadhaar: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={userData.dateOfBirth}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, dateOfBirth: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input
                        id="emergency"
                        value={userData.emergencyContact}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, emergencyContact: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={userData.address}
                      disabled={!isEditing}
                      onChange={(e) => setUserData({...userData, address: e.target.value})}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="health">
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle>Health Information</CardTitle>
                  <CardDescription>
                    Medical information for better healthcare delivery
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Input
                        id="bloodGroup"
                        value={userData.bloodGroup}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, bloodGroup: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="allergies">Known Allergies</Label>
                      <Input
                        id="allergies"
                        value={userData.allergies}
                        disabled={!isEditing}
                        onChange={(e) => setUserData({...userData, allergies: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-primary-light p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <h4 className="font-medium text-primary">Privacy Notice</h4>
                    </div>
                    <p className="text-sm text-primary">
                      Your health information is encrypted and only accessible to authorized healthcare providers 
                      with your explicit consent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions">
              <div className="grid md:grid-cols-3 gap-6">
                {profileActions.map((action, index) => (
                  <Card 
                    key={index}
                    className="user-type-card cursor-pointer"
                    onClick={action.action}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 healthcare-transition`}>
                        <action.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription>
                        {action.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;