import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Shield, Clock, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  currentlyLooking: string;
  whenLookNext: string;
  userType: string;
  userTypeOther: string;
  ageGroup: string;
  priorities: string[];
  maxBudget: string;
  searchMethod: string;
  biggestChallenge: string;
  paymentMethod: string;
  desiredFeatures: string[];
  wantsEarlyAccess: string;
  phoneNumber: string;
}

const SurveyForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    currentlyLooking: '',
    whenLookNext: '',
    userType: '',
    userTypeOther: '',
    ageGroup: '',
    priorities: [],
    maxBudget: '',
    searchMethod: '',
    biggestChallenge: '',
    paymentMethod: '',
    desiredFeatures: [],
    wantsEarlyAccess: 'no',
    phoneNumber: ''
  });

  const totalSections = formData.currentlyLooking === 'yes' ? 5 : 4;
  const progress = (currentSection / totalSections) * 100;

  const priorityOptions = ['Price', 'Safety', 'Location', 'Utilities', 'Privacy'];
  const featureOptions = ['Verified listings', 'Airtime payments', 'Offline access', 'Anonymous chat', 'Rent reminders'];

  const handlePriorityToggle = (priority: string) => {
    const newPriorities = formData.priorities.includes(priority)
      ? formData.priorities.filter(p => p !== priority)
      : formData.priorities.length < 2 
        ? [...formData.priorities, priority]
        : [formData.priorities[1], priority];
    
    setFormData({ ...formData, priorities: newPriorities });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = formData.desiredFeatures.includes(feature)
      ? formData.desiredFeatures.filter(f => f !== feature)
      : formData.desiredFeatures.length < 3
        ? [...formData.desiredFeatures, feature]
        : formData.desiredFeatures;
    
    setFormData({ ...formData, desiredFeatures: newFeatures });
  };

  const canProceedFromSection = (section: number) => {
    switch (section) {
      case 1:
        return formData.currentlyLooking && formData.userType && formData.ageGroup &&
               (formData.currentlyLooking === 'yes' || formData.whenLookNext);
      case 2:
        return formData.currentlyLooking === 'no' || 
               (formData.priorities.length > 0 && formData.maxBudget && formData.searchMethod);
      case 3:
        return formData.biggestChallenge && formData.paymentMethod;
      case 4:
        return true; // Optional section
      default:
        return true;
    }
  };

  const nextSection = () => {
    if (canProceedFromSection(currentSection)) {
      if (currentSection === 1 && formData.currentlyLooking === 'no') {
        setCurrentSection(3); // Skip section 2 for non-active users
      } else {
        setCurrentSection(currentSection + 1);
      }
    }
  };

  const prevSection = () => {
    if (currentSection === 3 && formData.currentlyLooking === 'no') {
      setCurrentSection(1); // Skip section 2 when going back
    } else {
      setCurrentSection(currentSection - 1);
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    
    try {
      console.log('Submitting form data:', formData);
      console.log('API Endpoint:', import.meta.env.VITE_API_ENDPOINT);
      
      const response = await axios.post(import.meta.env.VITE_API_ENDPOINT, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });
      
      console.log('Response:', response.data);
      
      toast({
        title: "Thank you!",
        description: "Your response has been submitted successfully.",
      });

      navigate('/thank-you', { replace: true });
      
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = 'Failed to save your response. Please try again.';
      
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          errorMessage = 'Request timeout. Please check your connection and try again.';
        } else if (error.response) {
          errorMessage = `Server error: ${error.response.status}. Please try again.`;
        } else if (error.request) {
          errorMessage = 'Network error. Please check your connection and try again.';
        }
      }
      
      toast({
        title: 'Submission Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Progress value={progress} className="flex-1" />
        <span className="text-sm text-slate-500">{currentSection}/{totalSections}</span>
      </div>

      {/* Section A: Basic Profile */}
      {currentSection === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-800">Basic Profile</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Are you actively looking for rental accommodation?</Label>
              <RadioGroup 
                value={formData.currentlyLooking} 
                onValueChange={(value) => setFormData({ ...formData, currentlyLooking: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="looking-yes" />
                  <Label htmlFor="looking-yes">Yes, actively looking</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="looking-no" />
                  <Label htmlFor="looking-no">No, not currently looking</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.currentlyLooking === 'no' && (
              <div className="animate-fade-in">
                <Label className="text-base font-medium">When might you look next?</Label>
                <Select value={formData.whenLookNext} onValueChange={(value) => setFormData({ ...formData, whenLookNext: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6-12months">6-12 months</SelectItem>
                    <SelectItem value="12months+">More than 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label className="text-base font-medium">What best describes you?</Label>
              <RadioGroup 
                value={formData.userType} 
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">Student (TVET/University)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shift-worker" id="shift-worker" />
                  <Label htmlFor="shift-worker">Shift worker (mining/retail/service)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
              
              {formData.userType === 'other' && (
                <Input
                  placeholder="Please specify"
                  value={formData.userTypeOther}
                  onChange={(e) => setFormData({ ...formData, userTypeOther: e.target.value })}
                  className="mt-2"
                />
              )}
            </div>

            <div>
              <Label className="text-base font-medium">Age group</Label>
              <RadioGroup 
                value={formData.ageGroup} 
                onValueChange={(value) => setFormData({ ...formData, ageGroup: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under-18" id="under-18" />
                  <Label htmlFor="under-18">Under 18</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="18-24" id="18-24" />
                  <Label htmlFor="18-24">18-24</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="25-34" id="25-34" />
                  <Label htmlFor="25-34">25-34</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="35+" id="35+" />
                  <Label htmlFor="35+">35+</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      {/* Section B: Rental Preferences (Conditional) */}
      {currentSection === 2 && formData.currentlyLooking === 'yes' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-orange-600" />
            <h2 className="text-xl font-semibold text-slate-800">Rental Preferences</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Top 2 priorities (select up to 2)</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {priorityOptions.map((priority) => (
                  <Badge
                    key={priority}
                    variant={formData.priorities.includes(priority) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      formData.priorities.includes(priority) 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'hover:bg-slate-100'
                    }`}
                    onClick={() => handlePriorityToggle(priority)}
                  >
                    {priority}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Maximum budget per month</Label>
              <RadioGroup 
                value={formData.maxBudget} 
                onValueChange={(value) => setFormData({ ...formData, maxBudget: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under-1000" id="under-1000" />
                  <Label htmlFor="under-1000">Under R1,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1000-1500" id="1000-1500" />
                  <Label htmlFor="1000-1500">R1,000 - R1,500</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1500-2000" id="1500-3000" />
                  <Label htmlFor="1500-3000">R1,500 - R3,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-3000" id="over-3000" />
                  <Label htmlFor="over-3000">Over R3,000</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium">Preferred search method</Label>
              <RadioGroup 
                value={formData.searchMethod} 
                onValueChange={(value) => setFormData({ ...formData, searchMethod: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="app" id="app" />
                  <Label htmlFor="app">Mobile App</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="website" id="website" />
                  <Label htmlFor="website">Website</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms-whatsapp" id="sms-whatsapp" />
                  <Label htmlFor="sms-whatsapp">SMS/WhatsApp</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      {/* Section C: Pain Points */}
      {currentSection === 3 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-slate-800">Pain Points</h2>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Biggest rental challenge</Label>
              <Select value={formData.biggestChallenge} onValueChange={(value) => setFormData({ ...formData, biggestChallenge: value })}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your biggest challenge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scams">Scams and fraudulent listings</SelectItem>
                  <SelectItem value="high-prices">High rental prices</SelectItem>
                  <SelectItem value="poor-conditions">Poor living conditions</SelectItem>
                  <SelectItem value="distance">Distance from work/study</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Preferred payment method</Label>
              <RadioGroup 
                value={formData.paymentMethod} 
                onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash">Cash</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="eft" id="eft" />
                  <Label htmlFor="eft">EFT/Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="airtime" id="airtime" />
                  <Label htmlFor="airtime">Airtime</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="payment-other" />
                  <Label htmlFor="payment-other">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )}

      {/* Section D: Feature Wishlist */}
      {currentSection === 4 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-slate-800">Feature Wishlist</h2>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Select up to 3 desired features</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {featureOptions.map((feature) => (
                  <Badge
                    key={feature}
                    variant={formData.desiredFeatures.includes(feature) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      formData.desiredFeatures.includes(feature) 
                        ? 'bg-orange-600 hover:bg-orange-700' 
                        : 'hover:bg-slate-100'
                    } ${formData.desiredFeatures.length >= 3 && !formData.desiredFeatures.includes(feature) 
                        ? 'opacity-50 cursor-not-allowed' 
                        : ''
                    }`}
                    onClick={() => handleFeatureToggle(feature)}
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Selected: {formData.desiredFeatures.length}/3
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section E: Opt-In Only */}
      {currentSection === 5 && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-semibold text-slate-800">Early Access</h2>

          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Would you like an early access invite?</Label>
              <RadioGroup 
                value={formData.wantsEarlyAccess} 
                onValueChange={(value) => setFormData({ ...formData, wantsEarlyAccess: value })}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-invite" />
                  <Label htmlFor="no-invite">No thanks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes-invite" />
                  <Label htmlFor="yes-invite">Yes, send me an invite</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.wantsEarlyAccess === 'yes' && (
              <div className="animate-fade-in">
                <Label htmlFor="phone" className="text-base font-medium">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., 081 234 5678"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="mt-2"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Your number will only be used for early access notifications
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={prevSection}
          disabled={currentSection === 1}
        >
          Previous
        </Button>

        {currentSection < totalSections ? (
          <Button
            onClick={nextSection}
            disabled={!canProceedFromSection(currentSection)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={submitForm}
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700"
          >
            {isSubmitting ?<><Loader className='animate-spin'/><span>'Submitting...'</span></> : 'Submit Survey'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
