import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  User, 
  Calendar, 
  FileText, 
  Settings,
  Bell,
  CreditCard,
  Activity,
  Clock,
  MapPin,
  Phone,
  Shield,
  Search,
  Stethoscope,
  Users,
  ClipboardList,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [patientSearchId, setPatientSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Get user role from URL params or default to Patient
  const userRole = searchParams.get('role') || 'Patient';

  // Mock user data - in real app would come from auth context
  const user = {
    name: userRole === 'Doctor' ? "Dr. Raj Kumar" : userRole === 'Lab' ? "Lab Tech Raj" : userRole === 'Medical' ? "Medical Staff Raj" : "Raj Kumar",
    role: userRole,
    healthId: userRole === 'Doctor' ? "KL-DOC-2024-001234" : userRole === 'Lab' ? "KL-LAB-2024-001234" : userRole === 'Medical' ? "KL-MED-2024-001234" : "KL-DH-2024-001234",
    phone: "+91 9876543210",
    location: "Kochi, Kerala",
    avatar: null,
    license: userRole === 'Doctor' ? "AYUSH-KL-12345" : userRole === 'Lab' ? "LAB-KL-67890" : userRole === 'Medical' ? "MED-KL-54321" : null,
    workplace: userRole === 'Doctor' ? "City Hospital, Kochi" : userRole === 'Lab' ? "Kerala Diagnostics" : userRole === 'Medical' ? "Health Department" : null
  };

  const handlePatientSearch = () => {
    if (patientSearchId.trim()) {
      // Mock search result
      setSearchResult({
        id: patientSearchId,
        name: "Patient Name",
        phone: "+91 9876543210",
        status: "Found"
      });
    }
  };

  const getQuickActions = () => {
    if (userRole === 'Doctor') {
      return [
        {
          title: "My Profile",
          description: "View and update your professional information",
          icon: User,
          action: () => navigate('/profile'),
          color: "bg-primary hover:bg-primary-hover"
        },
        {
          title: "Patient Records",
          description: "Access and manage patient health records",
          icon: FileText,
          action: () => console.log('Patient records'),
          color: "bg-medical-green hover:bg-medical-green/90"
        },
        {
          title: "Appointments",
          description: "Manage your appointment schedule",
          icon: Calendar,
          action: () => console.log('Appointments'),
          color: "bg-medical-orange hover:bg-medical-orange/90"
        },
        {
          title: "Prescriptions",
          description: "Create and manage prescriptions",
          icon: ClipboardList,
          action: () => console.log('Prescriptions'),
          color: "bg-secondary-foreground hover:bg-secondary-foreground/90"
        }
      ];
    } else if (userRole === 'Lab') {
      return [
        {
          title: "My Profile",
          description: "View and update your professional information",
          icon: User,
          action: () => navigate('/profile'),
          color: "bg-primary hover:bg-primary-hover"
        },
        {
          title: "Test Reports",
          description: "Upload and manage test reports",
          icon: BarChart3,
          action: () => console.log('Test reports'),
          color: "bg-medical-green hover:bg-medical-green/90"
        },
        {
          title: "Sample Tracking",
          description: "Track sample collection and processing",
          icon: Activity,
          action: () => console.log('Sample tracking'),
          color: "bg-medical-orange hover:bg-medical-orange/90"
        },
        {
          title: "Lab Management",
          description: "Manage lab operations and equipment",
          icon: Settings,
          action: () => console.log('Lab management'),
          color: "bg-secondary-foreground hover:bg-secondary-foreground/90"
        }
      ];
    } else if (userRole === 'Medical') {
      return [
        {
          title: "My Profile",
          description: "View and update your professional information",
          icon: User,
          action: () => navigate('/profile'),
          color: "bg-primary hover:bg-primary-hover"
        },
        {
          title: "Patient Management",
          description: "Manage patient records and care",
          icon: Users,
          action: () => console.log('Patient management'),
          color: "bg-medical-green hover:bg-medical-green/90"
        },
        {
          title: "Health Programs",
          description: "Manage public health programs",
          icon: Heart,
          action: () => console.log('Health programs'),
          color: "bg-medical-orange hover:bg-medical-orange/90"
        },
        {
          title: "Reports & Analytics",
          description: "View health statistics and reports",
          icon: BarChart3,
          action: () => console.log('Reports'),
          color: "bg-secondary-foreground hover:bg-secondary-foreground/90"
        }
      ];
    } else {
      return [
        {
          title: "My Profile",
          description: "View and update your personal information",
          icon: User,
          action: () => navigate('/profile'),
          color: "bg-primary hover:bg-primary-hover"
        },
        {
          title: "Health ID",
          description: "Create or manage your digital health ID",
          icon: CreditCard,
          action: () => navigate('/health-id'),
          color: "bg-medical-green hover:bg-medical-green/90"
        },
        {
          title: "Book Appointment",
          description: "Schedule appointments with healthcare providers",
          icon: Calendar,
          action: () => console.log('Book appointment'),
          color: "bg-medical-orange hover:bg-medical-orange/90"
        },
        {
          title: "Medical Records",
          description: "Access your complete health history",
          icon: FileText,
          action: () => console.log('View records'),
          color: "bg-secondary-foreground hover:bg-secondary-foreground/90"
        }
      ];
    }
  };

  const quickActions = getQuickActions();

  const recentActivity = [
    {
      id: 1,
      type: "appointment",
      title: "Checkup with Dr. Priya",
      date: "Today, 10:30 AM",
      status: "upcoming",
      icon: Calendar
    },
    {
      id: 2,
      type: "lab_result",
      title: "Blood Test Results",
      date: "Yesterday",
      status: "completed",
      icon: Activity
    },
    {
      id: 3,
      type: "prescription",
      title: "Prescription from Dr. Kumar",
      date: "2 days ago",
      status: "completed",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Kerala Digital Health</h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {userRole === 'Doctor' && (
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Enter Patient Health ID"
                    value={patientSearchId}
                    onChange={(e) => setPatientSearchId(e.target.value)}
                    className="w-48"
                  />
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handlePatientSearch}
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              )}
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2"
              >
                <Avatar className="w-6 h-6">
                  <AvatarImage src={user.avatar || undefined} />
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:inline text-sm">{user.name}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Welcome back, {user.name.split(' ')[0]}!</h2>
              <p className="text-muted-foreground">
                {userRole === 'Doctor' ? 'Manage patient records and provide quality healthcare' : 
                 userRole === 'Lab' ? 'Manage lab operations and test reports' :
                 userRole === 'Medical' ? 'Oversee healthcare programs and patient care' :
                 'Manage your health records and stay connected with healthcare providers'}
              </p>
            </div>
            <Badge variant="outline" className="hidden md:flex items-center space-x-2">
              <Shield className="w-3 h-3" />
              <span>Verified {user.role}</span>
            </Badge>
          </div>
        </div>

        {/* Patient Search Result */}
        {userRole === 'Doctor' && searchResult && (
          <Card className="healthcare-card mb-8 border-medical-green">
            <CardHeader>
              <CardTitle className="text-lg text-medical-green">Patient Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p><strong>Health ID:</strong> {searchResult.id}</p>
                  <p><strong>Name:</strong> {searchResult.name}</p>
                  <p><strong>Phone:</strong> {searchResult.phone}</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm" className="bg-medical-green hover:bg-medical-green/90">
                    View Records
                  </Button>
                  <Button variant="outline" size="sm">
                    Schedule Appointment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Info Card */}
        <Card className="healthcare-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.avatar || undefined} />
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <CreditCard className="w-4 h-4" />
                    <span>{userRole} ID: {user.healthId}</span>
                  </div>
                  {user.license && (
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>License: {user.license}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{user.phone}</span>
                  </div>
                  {user.workplace ? (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.workplace}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index}
                className="user-type-card cursor-pointer"
                onClick={action.action}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 healthcare-transition`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-sm">
                    {action.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <Card className="healthcare-card">
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 healthcare-transition">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{activity.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={activity.status === 'upcoming' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;