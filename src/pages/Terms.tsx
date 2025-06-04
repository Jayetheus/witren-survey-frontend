import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Users, AlertTriangle } from 'lucide-react';
import Footer from '../components/Footer';

const Terms = () => {
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8" data-aos="fade-down">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-slate-600 hover:text-witblue">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-600">Fair and transparent terms for using WitRent Survey</p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-witblue" />
                About This Survey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                WitRent Survey is a research initiative designed to understand the rental housing market in Witbank, South Africa. By participating, you help create better housing solutions for students and workers.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-semibold">Key Points:</p>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li>• Participation is completely voluntary</li>
                  <li>• You can stop at any time</li>
                  <li>• No compensation is provided</li>
                  <li>• Your responses help the community</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-witorange" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">When using our survey, you agree to:</p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witblue rounded-full mt-2"></div>
                  <p className="text-slate-700">Provide honest and accurate responses</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witorange rounded-full mt-2"></div>
                  <p className="text-slate-700">Not submit multiple responses from the same person</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witblue rounded-full mt-2"></div>
                  <p className="text-slate-700">Respect the purpose of the research</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-witorange rounded-full mt-2"></div>
                  <p className="text-slate-700">Not attempt to compromise the system</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <CardHeader>
              <CardTitle>How We Use Survey Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 mb-4">Your survey responses will be used for:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Research Purposes:</h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Market analysis reports</li>
                    <li>• Academic research papers</li>
                    <li>• Policy recommendations</li>
                    <li>• Community insights</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Product Development:</h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Feature prioritization</li>
                    <li>• User experience design</li>
                    <li>• Service improvements</li>
                    <li>• Technology decisions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                Limitations & Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 font-semibold mb-2">Please Note:</p>
                <ul className="text-yellow-700 space-y-1">
                  <li>• This survey is for research purposes only</li>
                  <li>• We cannot guarantee specific outcomes</li>
                  <li>• No warranty is provided for the service</li>
                  <li>• We are not liable for any decisions based on our findings</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                The survey questions, design, and methodology are proprietary to WitRent. However:
              </p>
              <div className="space-y-2">
                <p className="text-slate-700">• Your responses remain your intellectual property</p>
                <p className="text-slate-700">• Aggregated data may be shared publicly</p>
                <p className="text-slate-700">• Individual responses will never be published</p>
                <p className="text-slate-700">• You grant us permission to use responses for stated purposes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                We may update these terms occasionally. When we do:
              </p>
              <div className="space-y-2">
                <p className="text-slate-700">• We'll post the updated version here</p>
                <p className="text-slate-700">• Significant changes will be highlighted</p>
                <p className="text-slate-700">• Continued use means acceptance</p>
                <p className="text-slate-700">• You can stop using the service anytime</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8" data-aos="fade-up" data-aos-delay="600">
            <p className="text-slate-600 mb-4">Questions about these terms?</p>
            <p className="text-sm text-slate-500">
              Last updated: December 2024 • Contact: legal@witrent.co.za
            </p>
            <div className="mt-4">
              <Link to="/privacy" className="text-witblue hover:underline mx-2">Privacy Policy</Link>
              <span className="text-slate-400">|</span>
              <Link to="/survey" className="text-witblue hover:underline mx-2">Take Survey</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
