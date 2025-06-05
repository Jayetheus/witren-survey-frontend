
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Share2, Home } from 'lucide-react';
import Footer from '../components/Footer';

const ThankYou = () => {
  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        await import('aos/dist/aos.css');
        AOS.default.init({
          duration: 800,
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Thank You for Your Voice!
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your response has been successfully submitted and will help shape the future of rental housing in Witbank.
          </p>
        </div>

        {/* Impact Card */}
        <Card className="mb-8 shadow-lg border-green-200" data-aos="fade-up" data-aos-delay="200">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-green-700">
              <Heart className="w-6 h-6" />
              Your Impact Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-slate-700">
              You've just contributed to a community-driven initiative that will help:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-witblue mb-2">🏠</div>
                <h3 className="font-semibold text-slate-800">Better Housing</h3>
                <p className="text-sm text-slate-600">Improve rental options for students and workers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-witorange mb-2">📊</div>
                <h3 className="font-semibold text-slate-800">Data-Driven Solutions</h3>
                <p className="text-sm text-slate-600">Create evidence-based housing policies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-witblue mb-2">🤝</div>
                <h3 className="font-semibold text-slate-800">Community Building</h3>
                <p className="text-sm text-slate-600">Connect residents with better resources</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="mb-8 shadow-lg" data-aos="fade-up" data-aos-delay="300">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-witblue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Data Analysis</h4>
                  <p className="text-slate-600">We'll analyze your response alongside others to identify key trends</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-witorange text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Community Insights</h4>
                  <p className="text-slate-600">We'll share anonymous findings with local stakeholders</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-witblue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-slate-800">Solution Development</h4>
                  <p className="text-slate-600">Work on building better rental solutions for Witbank</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-witblue" />
                Spread the Word
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Help us reach more voices by sharing this survey with friends, classmates, or colleagues in Witbank.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-witblue text-witblue hover:bg-witblue hover:text-white"
                onClick={() => {
                  const url = window.location.origin + '/survey';
                  navigator.clipboard.writeText(url);
                  // Could add a toast notification here
                }}
              >
                Copy Survey Link
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Home className="w-5 h-5 text-witorange" />
                Stay Connected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Want to stay updated on our findings and future initiatives? Follow our progress.
              </p>
              <Link to="/">
                <Button className="w-full bg-witorange hover:bg-witorange/90 text-white">
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Reminder */}
        <div className="text-center bg-blue-50 p-6 rounded-lg border border-blue-200" data-aos="fade-up" data-aos-delay="600">
          <h3 className="font-semibold text-blue-800 mb-2">Privacy Protected</h3>
          <p className="text-blue-700 text-sm">
            Your response was submitted anonymously and is POPIA compliant. 
            Data will be automatically purged after 24 months.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
