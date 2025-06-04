
import { useEffect } from 'react';
import SurveyForm from '../components/SurveyForm';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Survey = () => {
  useEffect(() => {
    // Initialize AOS when available
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        await import('aos/dist/aos.css');
        AOS.default.init({
          duration: 600,
          once: true,
          easing: 'ease-out'
        });
      } catch (error) {
        console.log('AOS not available:', error);
      }
    };
    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header with back button */}
        <div className="mb-8" data-aos="fade-down">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-slate-600 hover:text-witblue">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              WitRent Survey
            </h1>
            <p className="text-slate-600 text-lg">
              Help us understand Witbank's rental market
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                🔒 Your privacy matters - all responses are anonymous by default
              </p>
            </div>
          </div>
        </div>
        
        <Card className="p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <SurveyForm />
        </Card>
        
        <div className="mt-8 text-center text-sm text-slate-500" data-aos="fade-up" data-aos-delay="400">
          <p>POPIA Compliant • Data processed in South Africa</p>
          <div className="mt-2">
            <Link to="/privacy" className="text-witblue hover:underline mx-2">Privacy Policy</Link>
            <Link to="/terms" className="text-witblue hover:underline mx-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
