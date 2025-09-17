import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Heart, 
  CreditCard,
  User,
  Calendar,
  MapPin,
  Phone,
  AlertCircle,
  CheckCircle,
  Download,
  Shield,
  Activity,
  Stethoscope
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HealthID = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [healthIdGenerated, setHealthIdGenerated] = useState(false);

  const [healthData, setHealthData] = useState({
    // Basic Health Info
    height: "",
    weight: "",
    bloodGroup: "",
    bloodPressure: "",
    allergies: "",
    chronicConditions: "",
    medications: "",
    emergencyContact: "",
    emergencyRelation: "",
    
    // Additional Health Details
    smokingStatus: "",
    alcoholConsumption: "",
    exerciseFrequency: "",
    dietType: "",
    lastCheckup: "",
    familyHistory: "",
    vaccinationStatus: "",
    
    // Generated Health ID
    healthId: "KL-DH-2024-001234",
    qrCode: "",
    issueDate: new Date().toISOString().split('T')[0]
  });

  const steps = [
    { id: 1, title: "Basic Health Info", description: "Essential health metrics and contact information" },
    { id: 2, title: "Lifestyle & History", description: "Additional health context and family history" },
    { id: 3, title: "Review & Generate", description: "Review information and generate Health ID" },
    { id: 4, title: "Your Health ID", description: "Download and manage your digital health card" }
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenerateHealthID = async () => {
    setIsLoading(true);
    // Simulate API call for health ID generation
    setTimeout(() => {
      setIsLoading(false);
      setHealthIdGenerated(true);
      setStep(4);
      toast({
        title: "Health ID Generated Successfully!",
        description: "Your digital health identity has been created.",
      });
    }, 2000);
  };

  const handleDownloadHealthID = () => {
    toast({
      title: "Health ID Downloaded",
      description: "Your Health ID card has been saved to downloads.",
    });
  };

  const progressValue = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/profile')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Profile</span>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg healthcare-gradient flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Health ID Creation</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Create Your Health ID</h1>
              <Badge variant="outline">Step {step} of 4</Badge>
            </div>
            <Progress value={progressValue} className="mb-4" />
            <p className="text-muted-foreground">{steps[step - 1].description}</p>
          </div>

          {/* Step 1: Basic Health Info */}
          {step === 1 && (
            <Card className="healthcare-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <span>Basic Health Information</span>
                </CardTitle>
                <CardDescription>
                  Enter your basic health metrics and emergency contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={healthData.height}
                      onChange={(e) => setHealthData({...healthData, height: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="65"
                      value={healthData.weight}
                      onChange={(e) => setHealthData({...healthData, weight: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <Select value={healthData.bloodGroup} onValueChange={(value) => setHealthData({...healthData, bloodGroup: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
                    <Input
                      id="bloodPressure"
                      placeholder="120/80"
                      value={healthData.bloodPressure}
                      onChange={(e) => setHealthData({...healthData, bloodPressure: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="allergies">Known Allergies</Label>
                    <Textarea
                      id="allergies"
                      placeholder="List any known allergies (food, medication, environmental)"
                      value={healthData.allergies}
                      onChange={(e) => setHealthData({...healthData, allergies: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea
                      id="medications"
                      placeholder="List current medications and dosages"
                      value={healthData.medications}
                      onChange={(e) => setHealthData({...healthData, medications: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      placeholder="+91 9876543210"
                      value={healthData.emergencyContact}
                      onChange={(e) => setHealthData({...healthData, emergencyContact: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyRelation">Relation</Label>
                    <Input
                      id="emergencyRelation"
                      placeholder="Spouse, Parent, Sibling"
                      value={healthData.emergencyRelation}
                      onChange={(e) => setHealthData({...healthData, emergencyRelation: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary-hover">
                    Next Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Lifestyle & History */}
          {step === 2 && (
            <Card className="healthcare-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span>Lifestyle & Medical History</span>
                </CardTitle>
                <CardDescription>
                  Additional health context helps provide better healthcare services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smokingStatus">Smoking Status</Label>
                    <Select value={healthData.smokingStatus} onValueChange={(value) => setHealthData({...healthData, smokingStatus: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never smoked</SelectItem>
                        <SelectItem value="former">Former smoker</SelectItem>
                        <SelectItem value="current">Current smoker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alcoholConsumption">Alcohol Consumption</Label>
                    <Select value={healthData.alcoholConsumption} onValueChange={(value) => setHealthData({...healthData, alcoholConsumption: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never</SelectItem>
                        <SelectItem value="occasionally">Occasionally</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="heavy">Heavy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exerciseFrequency">Exercise Frequency</Label>
                    <Select value={healthData.exerciseFrequency} onValueChange={(value) => setHealthData({...healthData, exerciseFrequency: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="1-2">1-2 times/week</SelectItem>
                        <SelectItem value="3-4">3-4 times/week</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dietType">Diet Type</Label>
                    <Select value={healthData.dietType} onValueChange={(value) => setHealthData({...healthData, dietType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select diet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="non-vegetarian">Non-vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="chronicConditions">Chronic Conditions</Label>
                    <Textarea
                      id="chronicConditions"
                      placeholder="List any chronic health conditions (diabetes, hypertension, etc.)"
                      value={healthData.chronicConditions}
                      onChange={(e) => setHealthData({...healthData, chronicConditions: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="familyHistory">Family Medical History</Label>
                    <Textarea
                      id="familyHistory"
                      placeholder="Significant family medical history"
                      value={healthData.familyHistory}
                      onChange={(e) => setHealthData({...healthData, familyHistory: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary-hover">
                    Next Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Review & Generate */}
          {step === 3 && (
            <Card className="healthcare-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-medical-green" />
                  <span>Review & Generate Health ID</span>
                </CardTitle>
                <CardDescription>
                  Review your information and generate your digital health identity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Health Information Summary:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>Height: {healthData.height || 'Not provided'} cm</div>
                    <div>Weight: {healthData.weight || 'Not provided'} kg</div>
                    <div>Blood Group: {healthData.bloodGroup || 'Not provided'}</div>
                    <div>Blood Pressure: {healthData.bloodPressure || 'Not provided'}</div>
                    <div>Emergency Contact: {healthData.emergencyContact || 'Not provided'}</div>
                    <div>Relation: {healthData.emergencyRelation || 'Not provided'}</div>
                  </div>
                </div>

                <div className="bg-primary-light p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary mb-2">Privacy & Security</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Your health data is encrypted with advanced security</li>
                        <li>• Only authorized healthcare providers can access with your consent</li>
                        <li>• You maintain full control over who sees your information</li>
                        <li>• Data is stored securely and backed up for reliability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevious}>
                    Previous
                  </Button>
                  <Button 
                    onClick={handleGenerateHealthID}
                    disabled={isLoading}
                    className="bg-medical-green hover:bg-medical-green/90"
                  >
                    {isLoading ? "Generating..." : "Generate Health ID"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Generated Health ID */}
          {step === 4 && healthIdGenerated && (
            <Card className="healthcare-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-medical-green rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-medical-green">Health ID Generated Successfully!</CardTitle>
                <CardDescription>
                  Your digital health identity is ready to use across Kerala's healthcare network
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Health ID Card Preview */}
                <div className="bg-gradient-to-r from-primary to-primary-hover p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">Kerala Digital Health ID</h3>
                      <p className="text-primary-foreground/80 text-sm">Government of Kerala</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xl font-bold">Raj Kumar</div>
                    <div className="text-primary-foreground/90">ID: {healthData.healthId}</div>
                    <div className="text-sm text-primary-foreground/80">Issue Date: {healthData.issueDate}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-primary-foreground/60">
                      Blood Group: {healthData.bloodGroup || 'B+'}
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                      <div className="text-xs text-center">QR<br/>Code</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={handleDownloadHealthID}
                    className="flex items-center space-x-2 bg-primary hover:bg-primary-hover"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Health ID</span>
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2"
                  >
                    <User className="w-4 h-4" />
                    <span>Go to Dashboard</span>
                  </Button>
                </div>

                <div className="bg-medical-green-light p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-medical-green mt-0.5" />
                    <div>
                      <h4 className="font-medium text-medical-green mb-2">What's Next?</h4>
                      <ul className="text-sm text-medical-green space-y-1">
                        <li>• Show your Health ID at any healthcare facility in Kerala</li>
                        <li>• Your records will be automatically updated after each visit</li>
                        <li>• Download the mobile app for offline access</li>
                        <li>• Keep your emergency contact information updated</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthID;